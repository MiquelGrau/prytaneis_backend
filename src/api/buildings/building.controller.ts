import { Request, Response } from 'express';
import { Building } from '../../models/building';

export async function getAllBuildings(req: Request, res: Response) {
    try {
        const buildings = await Building.findAll();
        res.json(buildings);
    } catch (error) {
        console.error('Error while fetching buildings:', error);
        res.status(500).json({ message: 'Error while fetching buildings' });
    }
}
