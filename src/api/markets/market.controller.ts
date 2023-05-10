import { Request, Response } from 'express';
import { Market } from '../../models/market';
import { Inventory } from '../../models/inventory';
import { Goods } from '../../models/goods';
import { Warehouse } from '../../models/warehouse';
import sequelize from '../../config/database';
import { Transaction } from 'sequelize';

export const getMarketGoods = async (req: Request, res: Response) => {
    const { marketId } = req.params;

    try {
        const goods = await Market.getGoodsForMarket(marketId);
        res.json(goods);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

const getBuyerInventory = async (buyerBuildingId: string) => {
    const buyerInventory = await Inventory.findOne({
        where: { buildingId: buyerBuildingId },
        include: [{ model: Goods, as: 'goods' }],
    });

    if (!buyerInventory) {
        throw new Error('Buyer warehouse inventory not found');
    }

    return buyerInventory.get('goods') as Goods;
};

const processWarehouse = async (
    warehouse: Warehouse,
    remainingGoodsToBuy: Partial<Goods>,
    t: Transaction
) => {
    console.log('Processing warehouse:', warehouse.buildingId);
    const inventory = await Inventory.findOne({
        where: { buildingId: warehouse.buildingId },
        include: [{ model: Goods, as: 'goods' }],
    });

    if (!inventory) {
        return;
    }

    const warehouseGoods = inventory.get('goods') as Goods;
    const updatedGoods: Partial<Goods> = {};

    for (const good in remainingGoodsToBuy) {
        const key = good as keyof Goods;
        const boughtAmount = Math.min(remainingGoodsToBuy[key], warehouseGoods[key]);
        remainingGoodsToBuy[key] -= boughtAmount;
        updatedGoods[key] = warehouseGoods[key] - boughtAmount;
    }

    const updatedWarehouseGoods = { ...warehouseGoods.dataValues, ...updatedGoods };
    await warehouseGoods.update(updatedWarehouseGoods, { transaction: t });
    console.log('Warehouse goods updated:', warehouseGoods);
};

const updateBuyerInventory = async (
    buyerGoods: Goods,
    purchasedGoods: Partial<Goods>,
    t: Transaction
) => {
    const updatedBuyerGoods: any = {};

    for (const good in purchasedGoods) {
        const key = good as keyof Goods;
        updatedBuyerGoods[key] = (buyerGoods[key] || 0) - purchasedGoods[key];
    }

    await buyerGoods.update(updatedBuyerGoods, { transaction: t });
};

export const buyGoods = async (req: Request, res: Response) => {
    console.log('buyGoods function called');
    const { marketId } = req.params;
    const { buyerBuildingId, goods } = req.body;

    try {
        const warehouses = await Market.getWarehousesForMarket(marketId);
        console.log('Warehouses fetched:', warehouses);

        const remainingGoodsToBuy = JSON.parse(JSON.stringify(goods));
        const t = await sequelize.transaction();

        try {
            for (const warehouse of warehouses) {
                await processWarehouse(warehouse, remainingGoodsToBuy, t);

                if (Object.values(remainingGoodsToBuy).every((amount) => amount === 0)) {
                    break;
                }
            }

            const buyerGoods = await getBuyerInventory(buyerBuildingId);

            // Calculate the actual purchased amount.
            const purchasedGoods: Partial<Goods> = {};
            for (const good in goods) {
                const key = good as keyof Goods;
                purchasedGoods[key] = goods[key] - (remainingGoodsToBuy[key] || 0);
            }

            await updateBuyerInventory(buyerGoods, purchasedGoods, t);

            await t.commit();

            console.log('All warehouses processed');
            res.status(200).json({ message: 'Transaction completed' });
        } catch (error) {
            console.error("Transaction error:", error instanceof Error ? error.message : error);
            await t.rollback();
            throw error;
        }
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
