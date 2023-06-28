import { Request, Response } from 'express';
import { Node } from '../../models/node';

export async function getAllNodes(req: Request, res: Response) {
    try {
        const nodes = await Node.findAll();
        res.json(nodes);
    } catch (error) {
        console.error('Error while fetching nodes:', error);
        res.status(500).json({ message: 'Error while fetching nodes' });
    }
}
