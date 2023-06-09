import { Sequelize, Model, DataTypes } from 'sequelize';
import { Building } from './building';
import { Inventory } from './inventory';

export class Warehouse extends Model {
    public buildingId!: string;
    public capacity!: number;
    public public!: boolean;

    public static initialize(sequelize: Sequelize) {
        super.init(
            {
                buildingId: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    references: {
                        model: 'Buildings',
                        key: 'id',
                    },
                },
                capacity: {
                    type: DataTypes.INTEGER,
                },
                public: {
                    type: DataTypes.BOOLEAN,
                    allowNull: false,
                    defaultValue: false,
                },
            },
            {
                sequelize,
                modelName: 'Warehouse',
            }
        );
    }

    public static associate() {
        this.belongsTo(Building, {
            foreignKey: 'buildingId',
            as: 'building',
        });
        this.hasOne(Inventory, {
            foreignKey: 'buildingId', // Change this line
            as: 'inventory',
            sourceKey: 'buildingId', // Keep this line
        });
    }
}

export function WarehouseInit(sequelize: Sequelize) {
    Warehouse.initialize(sequelize);
}
