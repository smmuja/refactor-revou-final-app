import { businessesUrl } from "config";
import { Button } from "features/base";
import { useGetBusinessDetail } from "features/businessDetail/hooks";
import { useNavigate } from "react-router-dom";

export function BusinessDetailEditButton() {
  const { data } = useGetBusinessDetail();

  const navigate = useNavigate();
  const handleBusinessEdit = () =>
    navigate(`${businessesUrl}/${data.business_id}/edit`);
  return (
    <Button
      onClick={handleBusinessEdit}
      className="w-fit box-content px-10 py-2 bg-green-500"
    >
      Edit
    </Button>
  );
}
