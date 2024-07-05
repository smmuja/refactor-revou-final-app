import { businessDetailUrl } from "config";
import { Button } from "features/base";
import { useNavigate } from "react-router-dom";

export function BusinessesDetailButton() {
  const navigate = useNavigate();
  const businessDetailNavigate = () => navigate(businessDetailUrl);

  return (
    <Button
      onClick={businessDetailNavigate}
      className="mt-3 bg-green-500 rounded-sm py-2"
    >
      Business Details
    </Button>
  );
}
