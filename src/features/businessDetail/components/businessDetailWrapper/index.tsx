import { Card } from "features/base";
import {
  BusinessAddButton,
  BusinessDetailData,
  BusinessDetailHead,
  BusinessDetailImage,
  BusinessDetailProductInformation,
} from "features/businessDetail";

export function BusinessDetailWrapper() {
  return (
    <Card className="border-0">
      <BusinessDetailHead />
      <BusinessDetailImage />
      <BusinessDetailData />
      <BusinessAddButton />
      <BusinessDetailProductInformation />
    </Card>
  );
}
