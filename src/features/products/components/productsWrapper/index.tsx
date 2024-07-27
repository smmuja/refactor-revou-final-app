import { Card } from "features/base";
import { ProductsData, ProductsHead } from "features/products";

export function ProductsWrapper() {
  return (
    <>
      <Card className="border-none">
        <ProductsHead />
        <ProductsData />
      </Card>
    </>
  );
}
