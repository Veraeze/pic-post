import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/register', async (req, res) => {
    const {name, email, password} = req.body;

    try {
        const existingUser = await User.findOne({email});

        if (existingUser) return res.status(400).json({message: 'email already in use'});

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        res.status(201).json({message: 'user registered successfully', user: newUser});
    
    } catch (error) {
        res.status(500).json({message: 'registration failed!', error: error.message })
    }
})