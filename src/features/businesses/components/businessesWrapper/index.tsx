import { Card } from "features/base";
import { BusinessesData, BusinessesHeader } from "features/businesses";

export function BusinessesWrapper() {
  return (
    <>
      <Card className="border-none">
        <BusinessesHeader />
        <BusinessesData />
      </Card>
    </>
  );
}
