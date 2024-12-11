import { Card } from "features/base";
import {
  BusinessEditData,
  BusinessEditHead,
  BusinessEditImage,
} from "features/businessEdit";

export function BusinessEditWrapper() {
  return (
    <Card>
      <BusinessEditHead />
      <BusinessEditImage />
      <BusinessEditData />
    </Card>
  );
}
