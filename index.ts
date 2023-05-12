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
import { Player, PlayerInit } from './src/models/player';
import { Game, GameInit } from './src/models/game';
import { User, UserInit } from './src/models/user';

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
PlayerInit(sequelize);
GameInit(sequelize);
UserInit(sequelize);

sequelize.sync();

// Set up associations
City.associate();
Owner.associate();
Inventory.associate();
Goods.associate();
Building.associate();
Warehouse.associate();
Market.associate();
Player.associate();
Game.associate();
User.associate();

export { User, City, Building, Owner, Inventory, Vehicle };
