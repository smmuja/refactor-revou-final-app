import { businessAddUrl } from "config";
import { Button, Card } from "features/base";
import { useNavigate } from "react-router-dom";

export function BusinessAddButton() {
  const navigate = useNavigate();
  const hanldeBusinessAdd = () => navigate(businessAddUrl);
  return (
    <Card>
      <Button onClick={hanldeBusinessAdd} className="bg-sky-500">
        Add Business
      </Button>
    </Card>
  );
}
