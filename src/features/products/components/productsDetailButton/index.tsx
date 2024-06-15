import { productsDetailUrl } from "config";
import { Button } from "features/base";
import { useNavigate } from "react-router-dom";

export function ProductsDetailButton() {
  const navigate = useNavigate();
  const productDetailNavigate = () => navigate(productsDetailUrl);

  return (
    <Button onClick={productDetailNavigate} className="mt-3 bg-green-500">
      Product Details
    </Button>
  );
}
