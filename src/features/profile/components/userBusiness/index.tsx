import { Button, Card } from "features/base";
import business from "assets/business.png";
import { useNavigate } from "react-router-dom";
import { businessAddUrl, businessDetailUrl } from "config";

export function UserBusiness() {
  const navigate = useNavigate();

  const handleBusinessViewMore = () => {
    navigate(businessDetailUrl);
  };

  const handleBusinessAdd = () => {
    navigate(businessAddUrl);
  };

  return (
    <Card className="mt-10 border-slate-50">
      <h3 className="font-semibold"> User Business</h3>
      <Card className="mt-3 border-slate-50">
        <div className="flex gap-3 justify-between items-end  mb-3">
          <img src={business} alt="" className="size-16" />
          <h4 className="font-medium content-end">Business Name</h4>
          <Button
            onClick={handleBusinessViewMore}
            className="bg-transparent w-fit h-fit p-0 content-end"
          >
            {" >>"}
          </Button>
        </div>
        <div>
          <div>
            <span>Product amount</span> <span>10</span>
          </div>
          <div>
            <span>Created at</span> <span>00-00-00</span>
          </div>
        </div>
      </Card>
      <Button onClick={handleBusinessAdd} className="bg-green-500 mt-3">
        Add Business
      </Button>
    </Card>
  );
}
