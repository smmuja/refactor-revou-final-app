import { productsAddUrl } from "config";
import { Button } from "features/base";
import { useNavigate } from "react-router-dom";

export function ProductAddButton() {
  const navigate = useNavigate();
  const handleProductAdd = () => navigate(productsAddUrl);
  return (
    <Button onClick={handleProductAdd} className="bg-sky-500 my-5">
      Add New Product
    </Button>
  );
}
