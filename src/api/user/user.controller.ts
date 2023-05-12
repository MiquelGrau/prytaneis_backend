import { Request, Response } from 'express';
import User from '../../models/user';

export const registerUser = async (req: Request, res: Response) => {
    const { userId } = req.body;
    console.log('Received request to register user:', req.body);

    try {
        const existingUser = await User.findOne({ where: { userId: userId }});

        if (existingUser) {
            res.status(400).json({ message: 'User already exists' });
        } else {
            const newUser = await User.create({ userId: userId });
            res.status(200).json({ message: 'User registered successfully', user: newUser });
        }
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};

