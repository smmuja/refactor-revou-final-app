import { Card } from "features/base";
import {
  BusinessEditButton,
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
      <BusinessEditButton />
    </Card>
  );
}
