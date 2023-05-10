import { DataTypes, Model, Sequelize } from 'sequelize';
import { Building } from './building';
import { Warehouse } from './warehouse';
import { Inventory } from './inventory';
import { Goods } from './goods';
import { City } from './city';
import { Owner } from './owner';

export class Market extends Model {
    public buildingId!: string;
    public transactionFee!: number;

    public static initialize(sequelize: Sequelize) {
        super.init(
            {
                buildingId: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    references: {
                        model: 'Buildings',
                        key: 'id',
                    },
                },
                transactionFee: {
                    type: DataTypes.FLOAT,
                },
            },
            {
                sequelize,
                modelName: 'Market',
            }
        );
    }

    public static associate() {
        this.belongsTo(Building, {
            foreignKey: 'buildingId',
            as: 'Building',
        });
    }

    public static async getWarehousesForMarket(marketId: string) {
        const market = await this.findOne({
            where: { buildingId: marketId },
            include: [
                {
                    model: Building,
                    as: 'Building',
                    include: [
                        { model: City, as: 'city' },
                        { model: Owner, as: 'owner' },
                    ],
                },
            ],
        });

        if (!market) {
            throw new Error('Market not found');
        }

        const marketBuilding = market.get('Building') as Building;

        return await Warehouse.findAll({
            include: [
                {
                    model: Building,
                    as: 'building',
                    where: { cityId: marketBuilding.cityId, ownerId: marketBuilding.ownerId },
                },
            ],
        });
    }

    public static async getGoodsForMarket(marketId: string) {
        const warehouses = await this.getWarehousesForMarket(marketId);

        const goodsList = await Promise.all(
            warehouses.map(async (warehouse) => {
                const inventory = await Inventory.findOne({
                    where: { buildingId: warehouse.buildingId },
                    include: [
                        {
                            model: Goods,
                            as: 'goods',
                        },
                    ],
                });

                return inventory ? (inventory.get('goods') as Goods) : null;
            })
        );

        const filteredGoodsList = goodsList.filter((goods) => goods !== null);

        // Sum up the goods in the list
        return filteredGoodsList.reduce(
            (accumulator: any, currentGoods: Goods | null) => {
                if (currentGoods) {
                    accumulator.food += currentGoods.food;
                    accumulator.wood += currentGoods.wood;
                    accumulator.iron += currentGoods.iron;
                    accumulator.tools += currentGoods.tools;
                    accumulator.clothes += currentGoods.clothes;
                }
                return accumulator;
            },
            {
                food: 0,
                wood: 0,
                iron: 0,
                tools: 0,
                clothes: 0,
            }
        );
    }
}

export function MarketInit(sequelize: Sequelize) {
    Market.initialize(sequelize);
}
