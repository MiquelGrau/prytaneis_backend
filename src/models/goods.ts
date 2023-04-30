import { Sequelize, Model, DataTypes } from 'sequelize';
import { Inventory } from './inventory';

export class Goods extends Model {
    public inventoryId!: number;
    public food!: number;
    public wood!: number;
    public iron!: number;
    public tools!: number;
    public clothes!: number;

    public static initialize(sequelize: Sequelize) {
        this.init(
            {
                inventoryId: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                },
                food: {
                    type: DataTypes.INTEGER,
                },
                wood: {
                    type: DataTypes.INTEGER,
                },
                iron: {
                    type: DataTypes.INTEGER,
                },
                tools: {
                    type: DataTypes.INTEGER,
                },
                clothes: {
                    type: DataTypes.INTEGER,
                },
            },
            {
                sequelize,
                modelName: 'Goods',
            }
        );
    }

    public static associate() {
        this.belongsTo(Inventory, {
            foreignKey: 'inventoryId',
            as: 'inventory',
        });
    }
}

export function GoodsInit(sequelize: Sequelize) {
    Goods.initialize(sequelize);
}
