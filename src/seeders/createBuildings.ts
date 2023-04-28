import { Warehouse } from '../models/warehouse';
import { Market } from '../models/market';
import { Owner } from '../models/owner';
import { Building } from '../models/building';

const warehouses = [
    {
        id: 'B00001',
        address: 'C/ bla bla 012',
        name: 'Magatzem Municipal',
        ownerId: 'M00001',
        cityId: 'C00001',
        capacity: 1000,
    },
    {
        id: 'B00005',
        address: 'C/ bla bla 014',
        name: 'Magatzem Privat',
        ownerId: 'P00001',
        cityId: 'C00001',
        capacity: 500,
    },
];

const markets = [
    {
        id: 'B00003',
        address: 'C/ bla bla 012 A2',
        name: 'Mercat municipal',
        ownerId: 'M00001',
        cityId: 'C00001',
        transactionFee: 0.05,
    },
];

const owners = [
    {
        id: 'M00001',
        name: 'Town Hall',
    },
    {
        id: 'P00001',
        name: 'Pepito',
    },
];

async function createOwners() {
    try {
        for (const ownerData of owners) {
            const owner = await Owner.create(ownerData);
            console.log(`Owner created: ${owner.name} with ID: ${owner.id}`);
        }
    } catch (error) {
        console.error('Error while creating owners:', error);
    }
}

async function createWarehouses() {
    try {
        for (const warehouseData of warehouses) {
            const buildingData = {
                id: warehouseData.id,
                address: warehouseData.address,
                name: warehouseData.name,
                ownerId: warehouseData.ownerId,
                cityId: warehouseData.cityId,
                type: 'Warehouse',
            };
            await Building.create(buildingData);
            const warehouse = await Warehouse.create({
                buildingId: warehouseData.id,
                capacity: warehouseData.capacity,
            });
            console.log(`Warehouse created: ${warehouseData.name} with ID: ${warehouse.buildingId}`);
        }
    } catch (error) {
        console.error('Error while creating warehouses:', error);
    }
}

async function createMarkets() {
    try {
        for (const marketData of markets) {
            const buildingData = {
                id: marketData.id,
                address: marketData.address,
                name: marketData.name,
                ownerId: marketData.ownerId,
                cityId: marketData.cityId,
                type: 'Market',
            };
            await Building.create(buildingData);
            const market = await Market.create({
                buildingId: marketData.id,
                transactionFee: marketData.transactionFee,
            });
            console.log(`Market created: ${marketData.name} with ID: ${market.buildingId}`);
        }
    } catch (error) {
        console.error('Error while creating markets:', error);
    }
}


export { createOwners, createWarehouses, createMarkets };
