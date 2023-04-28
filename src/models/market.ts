import { Sequelize, Model, DataTypes } from 'sequelize';
import { Building } from './building';

export class Market extends Model {
    public buildingId!: string;
    public transactionFee!: number;

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
                transactionFee: {
                    type: DataTypes.FLOAT,
                },
            },
            {
                sequelize,
                modelName: 'Market',
            }
        );
    }

    public static associate() {
        this.belongsTo(Building, {
            foreignKey: 'buildingId',
            as: 'building',
        });
    }
}

export function MarketInit(sequelize: Sequelize) {
    Market.initialize(sequelize);
}
