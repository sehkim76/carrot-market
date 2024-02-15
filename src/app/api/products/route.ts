// 여기에서 DB에 제품 레코드를 추가
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/helpers/prismadb"
import { NextResponse } from "next/server";

export async function POST(
    request: Request 
) {
    const currentUser = await getCurrentUser();
    if ( !currentUser ) {
        return NextResponse.error();
    }

    const body = await request.json();

    const { 
        title,
        description,
        category,
        latitude,
        longitude,
        imageSrc,
        price
     } = body;

     Object.keys(body).forEach((value: any) => {
        if ( !body[value] ) {
            NextResponse.error();
        }
     });    

    const product = await prisma.product.create(
        {
            data: {
                title,
                description,
                category,
                latitude,
                longitude,
                imageSrc,
                price: parseInt(price, 10),
                userId: currentUser.id      
            }
        });
    return NextResponse.json(product);
}