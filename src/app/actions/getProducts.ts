import prisma from "@/app/helpers/prismadb"

export interface ProductParams {
    category?: string;
}

export default async function getProducts(
    params : ProductParams
)
{
    const {
       category 
    } = params;

    let query : any = {};

    if ( category ) {
        query.category = category;
    }

    const totalItems = await prisma.product.count({where : query});

    const products = await prisma.product.findMany({
        where: query,
        orderBy: {
            createAt: 'desc'
        }
    })

    return {
        products,
        totalItems
    }
}