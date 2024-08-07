import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
import { Prisma } from '@prisma/client';
import toast from 'react-hot-toast';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, name, password } = body;

        if (!email || !name || !password) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Check if the user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            toast.error("User already exists");
            return NextResponse.json({ error: 'User already exists' }, { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                email,
                name,
                hashedPassword
            }
        });

        return NextResponse.json(user);
    } catch (error) {
        console.error('Error creating user:', error);

        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            // Specific handling for known Prisma errors
            if (error.code === 'P2002') {
                return NextResponse.json({ error: 'Email already in use' }, { status: 400 });
            }
            // Add more specific error handling as needed
        }

        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
