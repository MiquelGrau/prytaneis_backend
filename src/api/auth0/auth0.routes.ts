import express from 'express';
import { registerUser } from '../user/user.controller';

const router = express.Router();

router.post('/', registerUser); // Use the registerUser controller here

export default router;
