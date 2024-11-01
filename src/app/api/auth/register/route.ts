import { NextResponse} from "next/server";
import {findUser, register} from '@/server-logic/services/auth.service'

export const POST = async (req: Request) => {
    console.log('register')
        
    const {email, password, name} = await req.json()
    
    if (!email || !password || !name) return NextResponse
        .json({ message: 'Email, Name and password are required' }, { status: 400 });

    try {
        const userToRegister = {email, password, name}
        const user = await findUser(userToRegister)
        if (user) return NextResponse.json({ message: 'Failed to create user' }, { status: 400 });
        
        const userRegistered = await register(userToRegister);
        return NextResponse.json({user: userRegistered}, { status: 201});
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: 'Failed to create user'}, { status: 400 });
    }
}