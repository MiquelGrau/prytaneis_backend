import { Sequelize, Model, DataTypes } from 'sequelize';

export class Path extends Model {
    public id!: string;
    public startNodeId!: string;
    public endNodeId!: string;
    public speed!: number;
    public direction!: string;
    public maxDraft!: number;
    public minFreeboard!: number;
    public path!: string;

    public static initialize(sequelize: Sequelize) {
        this.init({
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            startNodeId: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            endNodeId: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            speed: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            direction: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            maxDraft: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            minFreeboard: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            path: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
        }, {
            sequelize,
            modelName: 'Path',
            timestamps: false,
        });
    }
}

export function PathInit(sequelize: Sequelize) {
    Path.initialize(sequelize);
}
