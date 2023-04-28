import { Sequelize, Model, DataTypes } from 'sequelize';
import { Building } from './building';

export class Owner extends Model {
    public id!: string;
    public name!: string;

    public static initialize(sequelize: Sequelize) {
        this.init({
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
            },
        }, {
            sequelize,
            modelName: 'Owner',
        });
    }

    public static associate() {
        this.hasMany(Building, {
            foreignKey: 'ownerId',
            as: 'buildings',
        });
    }
}

export function OwnerInit(sequelize: Sequelize) {
    Owner.initialize(sequelize);
}
