import sequelize from '../config/database';
import { BuildingInit } from '../models/building';
import { WarehouseInit } from '../models/warehouse';
import { MarketInit } from '../models/market';
import { OwnerInit } from '../models/owner';
import { CityInit } from '../models/city';
import { VehicleInit } from '../models/vehicle';
import { InventoryInit } from '../models/inventory';
import { GoodsInit } from '../models/goods';
import { createOwners, createWarehouses, createMarkets } from './createBuildings';
import { createVehicles } from './createVehicles';
import { createInventories, createGoods } from './createInventories';

// Initialize models
OwnerInit(sequelize);
WarehouseInit(sequelize);
MarketInit(sequelize);
CityInit(sequelize);
BuildingInit(sequelize);
InventoryInit(sequelize);
VehicleInit(sequelize);
GoodsInit(sequelize);

(async () => {
    await sequelize.sync({ force: true });
    console.log('Database synced successfully.');

    // Create owners
    await createOwners();

    // Create a city
    let city;
    try {
        city = await sequelize.models.City.create({
            id: 'C00001',
            name: 'Amsterdam',
            region: 'Channel',
            locationType: 'sea',
            population: 150000,
            positionX: 52.3702,
            positionY: 4.8952,
        });
        console.log('City created successfully.');
    } catch (error) {
        console.error('Error while creating city:', error);
    }

    // Create buildings
    if (city) {
        // Create warehouses
        await createWarehouses();

        // Create markets
        await createMarkets();

        // Create vehicles
        await createVehicles();

        // Create inventories and goods
        await createInventories();
        await createGoods();
    } else {
        console.error('City not found. Buildings cannot be created.');
    }

    process.exit();
})();

