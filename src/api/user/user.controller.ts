import { Request, Response } from 'express';
import { User } from '../../models/user';
import { Player } from '../../models/player';
import { Game } from '../../models/game';

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

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);

        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json({ user });
        }
    } catch (error) {
        console.error('Error getting user:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};

export const getUserGames = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id, {
            include: [{
                model: Player,
                as: 'players',
                include: [{
                    model: Game,
                    as: 'game',
                }]
            }]
        });

        if (!user) {
            res.status(404).json({ message: 'User not found' });
        } else {
            const players = (user.get('players') as Player[]);
            const games = players.map(player => player.get('game') as Game);
            res.status(200).json({ games });
        }
    } catch (error) {
        console.error('Error getting user games:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};

