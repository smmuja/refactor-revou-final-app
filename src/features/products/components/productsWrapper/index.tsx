import { Card } from "features/base";
import {
  ProductsHead,
  ProductsData,
  ProductsImage,
  ProductsDetailButton,
} from "features/products";
import {} from "../productsImage";

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
