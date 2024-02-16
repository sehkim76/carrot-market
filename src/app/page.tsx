
import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import FloatingButton from "@/components/FloatingButton";
import Image from "next/image";
import getProducts, { ProductParams } from "./actions/getProducts";
import getCurrentUser from "./actions/getCurrentUser";
import ProductCard from "@/components/ProductCard";
import Categories from "@/components/categories/Categories";

// http://localhost:3000/

interface HomeProps {
  searchParams: ProductParams
}
export default async function Home({searchParams}: HomeProps) {
  const {data: products, totalItems} = await getProducts(searchParams);
  const currentUser = await getCurrentUser();
  console.log('[Home]', products, totalItems);
  return (
      <Container>
        <Categories/>
        {
          totalItems === 0 ?
          <EmptyState/> :
          <div className="grid grid-cols-1 gap-8 pt-12
                    sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                    xl:grid-cols-5 2xl:grid-cols-6">
            {products.map((product)=>
              (
                <ProductCard currentUser={currentUser}
                            data={product}
                            key={product.id}/>                
              ))

            }
          </div>

        }
        { currentUser ?
        <FloatingButton href="/products/upload">+</FloatingButton>
        : null
        }
      </Container>

 
  );
}
