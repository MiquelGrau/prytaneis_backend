import { Sequelize, Model, DataTypes } from 'sequelize';
import { City } from './city';
import { Player } from './player';

export class Game extends Model {
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
                allowNull: false,
            },
        }, {
            sequelize,
            modelName: 'Game',
        });
    }

    public static associate() {
        this.hasMany(Player, {
            foreignKey: 'gameId',
            as: 'players',
        });
        this.hasMany(City, {
            foreignKey: 'gameId',
            as: 'cities',
        });
    }
}

export function GameInit(sequelize: Sequelize) {
    Game.initialize(sequelize);
}
