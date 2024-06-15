import { BusinessImage, Button, Card } from "features/base";

export function BusinessEditImage() {
  return (
    <Card>
      <BusinessImage />
      <Button className="w-full mt-3 bg-yellow-500">Edit Image</Button>
    </Card>
  );
}
