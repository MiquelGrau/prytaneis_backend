import { Request, Response } from 'express';
import { City } from '../../models/city';
import { Building } from '../../models/building';
import { Owner } from '../../models/owner';

export async function getAllCities(req: Request, res: Response) {
    try {
        const cities = await City.findAll();
        res.json(cities);
    } catch (error) {
        console.error('Error while fetching cities:', error);
        res.status(500).json({ message: 'Error while fetching cities' });
    }
}

export async function getCity(req: Request, res: Response) {
    const { cityId } = req.params;

    try {
        const city = await City.findOne({
            where: { id: cityId },
            include: [
                {
                    model: Building,
                    as: 'buildings',
                    include: [
                        {
                            model: Owner,
                            as: 'owner',
                            attributes: ['id', 'name'], // Only fetch 'id' and 'name' fields
                        },
                    ],
                },
            ],
        });

        if (city) {
            res.json(city);
        } else {
            res.status(404).json({ message: 'City not found' });
        }
    } catch (error) {
        console.error('Error while fetching city:', error);
        res.status(500).json({ message: 'Error while fetching city' });
    }
}
