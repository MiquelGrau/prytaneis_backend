import express from 'express';
import cityRoutes from './api/cities/city.routes';
import buildingRoutes from './api/buildings/building.routes';
import ownerRoutes from './api/owners/owner.routes';
import vehicleRoutes from './api/vehicles/vehicle.routes'; // Add this import
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/cities', cityRoutes);
app.use('/api/buildings', buildingRoutes);
app.use('/api/owners', ownerRoutes);
app.use('/api/vehicles', vehicleRoutes); // Add this line

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
