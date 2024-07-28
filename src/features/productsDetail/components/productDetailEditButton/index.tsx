import { productsUrl } from "config";
import { Button } from "features/base";
import { useGetProductDetail } from "features/productsDetail/hooks";
import { useNavigate } from "react-router-dom";

export function ProductDetailEditButton() {
  const { data } = useGetProductDetail();

  const navigate = useNavigate();
  const handleProductEdit = () => navigate(`${productsUrl}/${data.id}/edit`);

  console.log(data.id);
  return (
    <Button
      onClick={handleProductEdit}
      className="w-fit box-content px-10 bg-yellow-500"
    >
      Edit
    </Button>
  );
}
