import { businessEditUrl } from "config";
import { Button } from "features/base";
import { useNavigate } from "react-router-dom";

export function BusinessDetailEditButton() {
  const navigate = useNavigate();
  const handleBusinessEdit = () => navigate(businessEditUrl);
  return (
    <Button
      onClick={handleBusinessEdit}
      className="w-fit box-content px-10 py-2 bg-green-500"
    >
      Edit
    </Button>
  );
}
