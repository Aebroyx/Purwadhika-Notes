// Handle Request & Response

import {Request, Response} from 'express';

import prisma from '../connection';

export const login = async(): Promise<void> => {
    try {
        const findUsers = await prisma.users.findMany()
    } catch (error) {
        
    }
}
