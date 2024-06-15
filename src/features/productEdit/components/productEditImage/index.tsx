import { Button, Card, ProductImage } from "features/base";

export function ProductEditImage() {
  return (
    <Card>
      <ProductImage />
      <Button className="w-full mt-3 bg-yellow-500">Edit Image</Button>
    </Card>
  );
}
