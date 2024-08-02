import { login } from "@/server-logic/services/auth.service";
import { NextResponse } from "next/server";
import { SignJWT } from 'jose';
import { cookies } from "next/headers";


export const POST = async (req: Request) => {
    const { email, password } = await req.json()
    if (!email || !password) return NextResponse
        .json({ message: 'Email and password are required' }, { status: 400 });

    try {
        const user = await login({ email, password });
        if (!user) return NextResponse.json({ message: 'Failed to login' }, { status: 400 });


        const payload = {id: user._id,role: user.role}
        

        const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || 'AVOID_DEFAULT')
        const token = await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('2h')
        .sign(secret)
        user.token = token;

        cookies().set("accessToken", token, {
          httpOnly: true,
          maxAge: 24 * 60 * 60,
          sameSite: "strict"
        });
        user.summaries=[]
        return NextResponse.json({user} , { status: 200 });

    } catch (error) {
      console.log(error)
        return NextResponse.json({ message: 'Failed to login' }, { status: 400 });
    }
}