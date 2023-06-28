import { Request, Response } from 'express';
import { Path } from '../../models/path';

export async function getAllPaths(req: Request, res: Response) {
    try {
        const paths = await Path.findAll();
        res.json(paths);
    } catch (error) {
        console.error('Error while fetching paths:', error);
        res.status(500).json({ message: 'Error while fetching paths' });
    }
}
