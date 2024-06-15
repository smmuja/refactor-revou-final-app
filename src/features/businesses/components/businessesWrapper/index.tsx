import { Card } from "features/base";
import {
  BusinessesData,
  BusinessesDetailButton,
  BusinessesHead,
  BusinessesImage,
} from "features/businesses";

export function BusinessesWrapper() {
  return (
    <>
      <Card>
        <BusinessesHead />
        <BusinessesImage />
        <BusinessesData />
        <BusinessesDetailButton />
      </Card>
      <Card>
        <BusinessesHead />
        <BusinessesImage />
        <BusinessesData />
        <BusinessesDetailButton />
      </Card>
    </>
  );
}
