import { Card, ProductImage } from "features/base";
import {
  ProductsHead,
  ProductsData,
  ProductsDetailButton,
} from "features/products";

export function ProductsWrapper() {
  return (
    <>
      <Card>
        <ProductsHead />
        <ProductImage />
        <ProductsData />
        <ProductsDetailButton />
      </Card>
      <Card>
        <ProductsHead />
        <ProductImage />
        <ProductsData />
        <ProductsDetailButton />
      </Card>
    </>
  );
}
