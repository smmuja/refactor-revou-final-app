import { Card } from "features/base";
import {
  BusinessDetailData,
  BusinessDetailHead,
  BusinessDetailImage,
  BusinessDetailProductInformation,
  ProductAddButton,
} from "features/businessDetail";

export function BusinessDetailWrapper() {
  return (
    <Card className="border-0">
      <BusinessDetailHead />
      <BusinessDetailImage />
      <BusinessDetailData />
      <ProductAddButton />
      <BusinessDetailProductInformation />
    </Card>
  );
}
