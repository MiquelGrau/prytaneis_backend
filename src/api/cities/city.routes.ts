import { Router } from 'express';
import { getAllCities, getCity } from './city.controller'; // Import the getAllCities function from the city controller

const router = Router();

router.get('/', getAllCities); // Use the getAllCities function as the handler for the GET / route
router.get('/:cityId', getCity); // Use the getCity function as the handler for the GET /:cityId route


export default router;
