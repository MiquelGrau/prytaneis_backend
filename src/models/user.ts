import { Sequelize, Model, DataTypes } from 'sequelize';
import { Player } from './player';

export class User extends Model {
    public userId!: string;

    public static initialize(sequelize: Sequelize) {
        this.init({
            userId: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
        }, {
            sequelize,
            modelName: 'User',
        });
    }

    public static associate() {
        this.hasOne(Player, {
            foreignKey: 'userId',
            as: 'player',
        });
    }
}

export function UserInit(sequelize: Sequelize) {
    User.initialize(sequelize);
}
