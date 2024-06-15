import { productsAddUrl } from "config";
import { Button, Card } from "features/base";
import { useNavigate } from "react-router-dom";

export function ProductDetailAddButton() {
  const navigate = useNavigate();
  const handleAddProduct = () => navigate(productsAddUrl);
  return (
    <Card className="border-0">
      <Button onClick={handleAddProduct} className="bg-green-500">
        Add Product
      </Button>
    </Card>
  );
}
