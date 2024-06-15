import { Card, ProductImage } from "features/base";
import {
  ProductDetailAddButton,
  ProductDetailBusinessInformation,
  ProductDetailData,
  ProductDetailHead,
} from "features/productsDetail";

export function ProductDetailWrapper() {
  return (
    <Card className="border-0">
      <ProductDetailHead />
      <ProductImage />
      <ProductDetailData />

      <ProductDetailAddButton />
      <ProductDetailBusinessInformation />
    </Card>
  );
}
