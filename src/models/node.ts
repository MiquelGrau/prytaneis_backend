import { Sequelize, Model, DataTypes } from 'sequelize';

export class Node extends Model {
    public id!: string;
    public name!: string;
    public latitude!: number;
    public longitude!: number;
    public regionId!: string;
    public nodeType!: string;
    public supernode!: boolean;

    public static initialize(sequelize: Sequelize) {
        this.init({
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            latitude: {
                type: DataTypes.FLOAT(10, 4),
                allowNull: false,
            },
            longitude: {
                type: DataTypes.FLOAT(10, 4),
                allowNull: false,
            },
            regionId: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            nodeType: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            supernode: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
        }, {
            sequelize,
            modelName: 'Node',
            timestamps: false,
        });
    }
}

export function NodeInit(sequelize: Sequelize) {
    Node.initialize(sequelize);
}
