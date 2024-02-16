// 여기에서 DB에 제품 레코드를 추가
import { NextResponse } from "next/server";
import prisma from "@/helpers/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";



export async function POST(
    request: Request,
) {
    console.log("[product register] entry")
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

     console.log("[product register] body", body)
     Object.keys(body).forEach((value: any) => {
        if ( !body[value] ) {
            return NextResponse.error();
        }
     });    
     console.log("[product register] pushing db")
    const product = await prisma.product.create({
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
    console.log("[product register] pushed db")
    return NextResponse.json(product);
}