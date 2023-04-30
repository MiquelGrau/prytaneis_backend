import { Sequelize, Model, DataTypes } from 'sequelize';
import { Building } from './building';
import { City } from './city'; // Add this import

export class Owner extends Model {
    public id!: string;
    public name!: string;
    public cityId!: string; // Add this field

    public static initialize(sequelize: Sequelize) {
        this.init({
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
            },
            cityId: { // Add this field
                type: DataTypes.STRING,
                allowNull: true, // Allow null values for regular players
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
        this.belongsTo(City, { // Add this association
            foreignKey: 'cityId',
            as: 'city',
        });
    }
}

export function OwnerInit(sequelize: Sequelize) {
    Owner.initialize(sequelize);
}
