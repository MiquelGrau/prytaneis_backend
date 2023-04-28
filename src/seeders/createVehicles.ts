import { Vehicle } from '../models/vehicle';

interface VehicleData {
    id: string;
    ownerId: string;
    type: string;
    capacity: number;
}

const vehicles: Array<VehicleData> = [
    {
        id: 'V00001',
        ownerId: 'M00001',
        type: 'Ship',
        capacity: 200,
    },
    {
        id: 'V00002',
        ownerId: 'M00001',
        type: 'Carriage',
        capacity: 50,
    },
    {
        id: 'V00003',
        ownerId: 'P00001',
        type: 'Carriage',
        capacity: 30,
    },
];

async function createVehicles() {
    try {
        for (const vehicleData of vehicles) {
            const vehicle = await Vehicle.create({
                id: vehicleData.id,
                ownerId: vehicleData.ownerId,
                type: vehicleData.type,
                capacity: vehicleData.capacity,
            });
            console.log(`Vehicle created: ${vehicle.type} with ID: ${vehicle.id}`);
        }
    } catch (error) {
        console.error('Error while creating vehicles:', error);
    }
}

export { createVehicles };
