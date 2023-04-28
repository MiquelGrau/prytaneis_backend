import { Sequelize, Model, DataTypes } from 'sequelize';
import { Building } from './building';

export class City extends Model {
    public id!: string;
    public name!: string;
    public region!: string;
    public locationType!: string;
    public population!: number;
    public positionX!: number;
    public positionY!: number;

    public static initialize(sequelize: Sequelize) {
        this.init({
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
            },
            region: {
                type: DataTypes.STRING,
            },
            locationType: {
                type: DataTypes.STRING,
            },
            population: {
                type: DataTypes.INTEGER,
            },
            positionX: {
                type: DataTypes.FLOAT,
            },
            positionY: {
                type: DataTypes.FLOAT,
            },
        }, {
            sequelize,
            modelName: 'City',
        });
    }

    public static associate() {
        this.hasMany(Building, {
            foreignKey: 'cityId',
            as: 'buildings',
        });
    }
}

export function CityInit(sequelize: Sequelize) {
    City.initialize(sequelize);
}
