import { Button } from "features/base";
import { useNavigate } from "react-router-dom";

export function ProductEditButton() {
  const navigate = useNavigate();
  const handleCancelButton = () => {
    navigate(-1);
  };

  return (
    <div className="flex mt-3 gap-3 w-fit">
      <Button onClick={handleCancelButton}>Cancel</Button>
      <Button type="submit" className="bg-green-500">
        Submit
      </Button>
    </div>
  );
}
