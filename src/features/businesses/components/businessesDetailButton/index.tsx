// import { businessDetailUrl } from "config";
import { Button } from "features/base";
import { useNavigate } from "react-router-dom";
import { businessDetailButtonProps } from "./type";

export function BusinessesDetailButton(props: businessDetailButtonProps) {
  const { id } = props;
  const navigate = useNavigate();
  const businessDetailNavigate = () => navigate(`/businesses-detail/${id}`);

  return (
    <Button
      onClick={businessDetailNavigate}
      className="mt-3 bg-green-500 rounded-sm py-2"
    >
      Business Details
    </Button>
  );
}
