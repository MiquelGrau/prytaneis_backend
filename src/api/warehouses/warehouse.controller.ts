import { Request, Response } from 'express';
import { Warehouse } from '../../models/warehouse';
import { Building } from '../../models/building';

export async function createWarehouse(req: Request, res: Response) {
    try {
        const warehouse = await Warehouse.create(req.body);
        res.status(201).json(warehouse);
    } catch (error) {
        res.status(500).json({ message: 'Error while creating warehouse', error });
    }
}

export async function getPublicWarehousesByCity(req: Request, res: Response) {
    const cityId = req.params.cityId;

    try {
        const warehouses = await Warehouse.findAll({
            where: { public: true },
            include: [
                {
                    model: Building,
                    as: 'building',
                    where: { cityId },
                },
            ],
        });
        res.status(200).json(warehouses);
    } catch (error) {
        res.status(500).json({ message: 'Error while fetching public warehouses', error });
    }
}

export async function getWarehousesByOwner(req: Request, res: Response) {
    const ownerId = req.params.ownerId;

    try {
        const warehouses = await Warehouse.findAll({
            include: [
                {
                    model: Building,
                    as: 'building',
                    where: { ownerId },
                },
            ],
        });
        res.status(200).json(warehouses);
    } catch (error) {
        res.status(500).json({ message: 'Error while fetching warehouses by owner', error });
    }
}

export async function updateWarehouse(req: Request, res: Response) {
    const buildingId = req.params.buildingId;

    try {
        const [, updatedWarehouse] = await Warehouse.update(req.body, {
            where: { buildingId },
            returning: true,
        });

        if (updatedWarehouse.length === 0) {
            res.status(404).json({ message: 'Warehouse not found' });
            return;
        }

        res.status(200).json(updatedWarehouse[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error while updating warehouse', error });
    }
}
