import productImg from "assets/product.png";
import { Button, Card } from "features/base";

export function ProductEditImage() {
  return (
    <Card>
      <img src={productImg} alt="Product image" />
      <Button className="w-full mt-3 bg-yellow-500">Edit Image</Button>
    </Card>
  );
}
