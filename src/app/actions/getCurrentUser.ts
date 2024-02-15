import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Prisma } from "@prisma/client";
import { getServerSession } from "next-auth";
import prisma from "@/app/helpers/prismadb"

export async function getSession()
{
    return await getServerSession(authOptions)
}

export default async function getCurrentUser()
{
    try {
        const session = await getSession();
        if ( !session?.user?.email ) {
            return null;
        }

        const currentUser = await prisma.user.findUnique(
            {   where: {
                    email: session.user.email
                }
            }
        );
        console.log("[getCurrentUser] currentUser", currentUser);
        if ( !currentUser ) return null;
        return currentUser;
    } catch ( error ) {
        return null;
    }
}