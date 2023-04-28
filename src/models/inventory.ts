import { Sequelize, Model, DataTypes } from 'sequelize';
import { Warehouse } from './warehouse';
import { Goods } from './goods';

export class Inventory extends Model {
    public id!: number;
    public warehouseId!: string;

    public static initialize(sequelize: Sequelize) {
        this.init(
            {
                id: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    allowNull: false,
                },
                warehouseId: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            {
                sequelize,
                modelName: 'Inventory',
            }
        );
    }

    public static associate() {
        this.belongsTo(Warehouse, {
            foreignKey: 'warehouseId',
            as: 'warehouse',
        });
        this.hasOne(Goods, {
            foreignKey: 'inventoryId',
            as: 'goods',
        });
    }
}

export function InventoryInit(sequelize: Sequelize) {
    Inventory.initialize(sequelize);
}
