import { productsEditUrl } from "config";
import { Button } from "features/base";
import { useNavigate } from "react-router-dom";

export function ProductDetailEditButton() {
  const navigate = useNavigate();
  const handleProductEdit = () => navigate(productsEditUrl);
  return (
    <Button
      onClick={handleProductEdit}
      className="w-fit box-content px-10 bg-yellow-500"
    >
      Edit
    </Button>
  );
}
