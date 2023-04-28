import { Request, Response } from 'express';
import { Vehicle } from '../../models/vehicle';

export async function getAllVehicles(req: Request, res: Response) {
    try {
        const vehicles = await Vehicle.findAll();
        res.json(vehicles);
    } catch (error) {
        console.error('Error while fetching vehicles:', error);
        res.status(500).json({ message: 'Error while fetching vehicles' });
    }
}
