import { Request, Response } from 'express';
import { Building } from '../../models/building';
import { Goods } from '../../models/goods';
import { Inventory } from '../../models/inventory';
import { Warehouse } from '../../models/warehouse';

export async function getAllBuildings(req: Request, res: Response) {
    try {
        const buildings = await Building.findAll();
        res.json(buildings);
    } catch (error) {
        console.error('Error while fetching buildings:', error);
        res.status(500).json({ message: 'Error while fetching buildings' });
    }
}

export const getGoodsByBuilding = async (req: Request, res: Response) => {
    const buildingId = req.params.buildingId;

    try {
        // Find the warehouse associated with the building
        const warehouse = await Warehouse.findOne({ where: { buildingId } });

        if (!warehouse) {
            res.status(404).json({ message: 'Warehouse not found for the specified building.' });
            return;
        }

        // Find the inventory associated with the warehouse
        const inventory = await Inventory.findOne({ where: { warehouseId: warehouse.buildingId } });

        if (!inventory) {
            res.status(404).json({ message: 'Inventory not found for the specified warehouse.' });
            return;
        }

        // Find the goods associated with the inventory
        const goods = await Goods.findOne({ where: { inventoryId: inventory.id } });

        if (!goods) {
            res.status(404).json({ message: 'Goods not found for the specified inventory.' });
            return;
        }

        res.status(200).json(goods);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while fetching the goods data.', error });
    }
};


