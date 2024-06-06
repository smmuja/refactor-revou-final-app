import { Card } from "features/base";
import {
  ProductsHead,
  ProductsData,
  ProductsImage,
  ProductsDetailButton,
} from "features/products";

export function ProductsWrapper() {
  return (
    <>
      <Card>
        <ProductsHead />
        <ProductsImage />
        <ProductsData />
        <ProductsDetailButton />
      </Card>
      <Card>
        <ProductsHead />
        <ProductsImage />
        <ProductsData />
        <ProductsDetailButton />
      </Card>
    </>
  );
}
