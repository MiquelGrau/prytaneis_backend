import { Sequelize, Model, DataTypes } from 'sequelize';

export class Vehicle extends Model {
    public id!: string;
    public type!: string;
    public ownerId!: string;
    // ... other properties as needed

    public static initialize(sequelize: Sequelize) {
        this.init({
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            type: {
                type: DataTypes.STRING,
            },
            ownerId: {
                type: DataTypes.STRING,
            },
            // ... other properties as needed
        }, {
            sequelize,
            modelName: 'Vehicle',
        });
    }
}

export function VehicleInit(sequelize: Sequelize) {
    Vehicle.initialize(sequelize);
}

