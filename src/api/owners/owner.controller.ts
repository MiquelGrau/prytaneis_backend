import { Request, Response } from 'express';
import { Owner } from '../../models/owner';

export async function getAllOwners(req: Request, res: Response) {
    try {
        const owners = await Owner.findAll();
        res.json(owners);
    } catch (error) {
        console.error('Error while fetching owners:', error);
        res.status(500).json({ message: 'Error while fetching owners' });
    }
}
