
import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import FloatingButton from "@/components/FloatingButton";
import Image from "next/image";
import getProducts, { ProductParams } from "./actions/getProducts";

// http://localhost:3000/

interface HomeProps {
  searchParams: ProductParams
}
export default async function Home({searchParams}: HomeProps) {
  const {products, totalItems} = await getProducts(searchParams);

  console.log('[Home]', products, totalItems);
  return (
      <Container>
        {
          totalItems === 0 ?
          <EmptyState/> :


        }
        <FloatingButton href="/products/upload">+</FloatingButton>
      </Container>

 
  );
}
