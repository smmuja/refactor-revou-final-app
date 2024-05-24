import { Button, Card } from "features/base";
import business from "assets/business.png";

export function UserBusiness() {
  return (
    <Card className="mt-10">
      <h3 className="font-semibold"> User Business</h3>
      <Card className="mt-3">
        <div className="flex gap-3">
          <img src={business} alt="" className="size-32" />
          <h4 className="font-medium content-end">Business Name</h4>
          <h4 className="content-end">More</h4>
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
      <Button>Add Business</Button>
    </Card>
  );
}
