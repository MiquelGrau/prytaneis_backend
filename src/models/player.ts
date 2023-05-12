import { Sequelize, Model, DataTypes } from 'sequelize';
import User from './user';
import Game from './game';

export class Player extends Model {
    public id!: string;
    public userId!: string;
    public gameId!: string;

    public static initialize(sequelize: Sequelize) {
        this.init({
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            userId: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            gameId: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        }, {
            sequelize,
            modelName: 'Player',
        });
    }

    public static associate() {
        this.belongsTo(User, {
            foreignKey: 'userId',
            as: 'user',
        });
        this.belongsTo(Game, {
            foreignKey: 'gameId',
            as: 'game',
        });
    }
}

export function PlayerInit(sequelize: Sequelize) {
    Player.initialize(sequelize);
}
