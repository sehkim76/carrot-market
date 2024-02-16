
import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import FloatingButton from "@/components/FloatingButton";
import Image from "next/image";
import getProducts, { ProductParams } from "../actions/getProducts";
import getCurrentUser from "../actions/getCurrentUser";
import ProductCard from "@/components/ProductCard";

// http://localhost:3000/

interface HomeProps {
  searchParams: ProductParams

}
export default async function Home({searchParams}: HomeProps) {
  const products = await getProducts(searchParams)
  const currentUser = await getCurrentUser();

  console.log('[Home]', products);
  return (
      <Container>
        {
          products?.data.length === 0 ?
          <EmptyState/> :
            <div
              className="grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
            >
            {products?.data.map((product)=>(
              <ProductCard

                />
            ))}
            </div>

        }
        <FloatingButton href="/products/upload">+</FloatingButton>
      </Container>

 
  );
}
