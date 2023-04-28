import { Sequelize, Model, DataTypes } from 'sequelize';
import { Owner } from './owner';
import { City } from './city';

export class Building extends Model {
    public id!: string;
    public address!: string;
    public name!: string;
    public ownerId!: string;
    public type!: string;
    public cityId!: string;

    public static initialize(sequelize: Sequelize) {
        super.init(
            {
                id: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                },
                address: {
                    type: DataTypes.STRING,
                },
                name: {
                    type: DataTypes.STRING,
                },
                ownerId: {
                    type: DataTypes.STRING,
                },
                type: {
                    type: DataTypes.STRING,
                },
                cityId: {
                    type: DataTypes.STRING,
                },
            },
            {
                sequelize,
                modelName: 'Building',
            }
        );
    }

    public static associate() {
        this.belongsTo(Owner, {
            foreignKey: 'ownerId',
            as: 'owner',
        });
        this.belongsTo(City, {
            foreignKey: 'cityId',
            as: 'city',
        });
    }
}

export function BuildingInit(sequelize: Sequelize) {
    Building.initialize(sequelize);
}
