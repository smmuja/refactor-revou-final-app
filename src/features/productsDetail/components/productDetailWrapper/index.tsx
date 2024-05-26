import { Card } from "features/base";
import {
  ProductDetailAddButton,
  ProductDetailBusinessInformation,
  ProductDetailData,
  ProductDetailHead,
  ProductDetailImage,
} from "features/productsDetail";

export function ProductDetailWrapper() {
  return (
    <Card className="border-0">
      <ProductDetailHead />
      <ProductDetailImage />
      <ProductDetailData />

      <ProductDetailAddButton />
      <ProductDetailBusinessInformation />
    </Card>
  );
}
