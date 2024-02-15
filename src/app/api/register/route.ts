// 여기에서 DB에 사용자 레코드를 추가
import bcrypt from "bcryptjs"
import prisma from "@/app/helpers/prismadb"
import { NextResponse } from "next/server";

export async function POST(
    request: Request 
) {
    const body = await request.json()
    const { email, name, password } = body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create(
        {
            data: {
                email,
                name,
                hashedPassword,   
                image: ''             
            }
        }
    )
    return NextResponse.json(user)
}