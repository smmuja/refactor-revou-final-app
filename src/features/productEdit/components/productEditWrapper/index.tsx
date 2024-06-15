import { Card } from "features/base";
import {
  ProductEditButton,
  ProductEditData,
  ProductEditHead,
  ProductEditImage,
} from "features/productEdit";

export function ProductEditWrapper() {
  return (
    <Card>
      <ProductEditHead />
      <ProductEditImage />
      <ProductEditData />
      <ProductEditButton />
    </Card>
  );
}
