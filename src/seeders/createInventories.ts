import { Inventory } from '../models/inventory';
import { Goods } from '../models/goods';
import { v4 as uuidv4 } from 'uuid';

const inventories = [
    {
        id: 'I00001',
        warehouseId: 'B00001',
    },
    {
        id: 'I00002',
        warehouseId: 'B00005',
    },
];

const goodsData = [
    {
        inventoryId: 'I00001',
        food: 5,
        wood: 5,
        iron: 5,
        tools: 5,
        clothes: 5,
    },
    {
        inventoryId: 'I00002',
        food: 8,
        wood: 8,
        iron: 8,
        tools: 8,
        clothes: 8,
    },
];

async function createInventories() {
    try {
        for (const inventoryData of inventories) {
            const inventory = await Inventory.create(inventoryData);
            console.log(`Inventory created for Warehouse ID: ${inventoryData.warehouseId}`);
        }
    } catch (error) {
        console.error('Error while creating inventories:', error);
    }
}

async function createGoods() {
    try {
        for (const goodsItem of goodsData) {
            const id = uuidv4(); // Generate a unique UUID
            const goods = await Goods.create({ ...goodsItem, id });
            console.log(`Goods created for Inventory ID: ${goods.inventoryId}`);
        }
    } catch (error) {
        console.error('Error while creating goods:', error);
    }
}

export { createInventories, createGoods };
