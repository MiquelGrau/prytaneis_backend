import { CityInit, City } from './src/models/city';
import { BuildingInit, Building } from './src/models/building';
import { OwnerInit, Owner } from './src/models/owner';
import { InventoryInit, Inventory } from './src/models/inventory';
import { VehicleInit, Vehicle } from './src/models/vehicle';
import { Goods, GoodsInit } from './src/models/goods';
import { sequelize } from './src/config/database';
import app from './src/app';
import { Warehouse, WarehouseInit } from './src/models/warehouse';
import { Market, MarketInit } from './src/models/market';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Initialize models
CityInit(sequelize);
OwnerInit(sequelize);
InventoryInit(sequelize);
GoodsInit(sequelize);
VehicleInit(sequelize);
BuildingInit(sequelize);
WarehouseInit(sequelize);
MarketInit(sequelize);

sequelize.sync();

// Set up associations
City.associate();
Owner.associate();
Inventory.associate();
Goods.associate();
Building.associate();
Warehouse.associate();
Market.associate();

export { City, Building, Owner, Inventory, Vehicle };
