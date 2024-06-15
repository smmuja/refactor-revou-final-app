import { Card } from "features/base";
import businessImg from "assets/business.png";
import userImg from "assets/userDummy.png";

export function ProductDetailBusinessInformation() {
  return (
    <Card className="mt-5">
      <h2 className="font-semibold mb-5">About the business</h2>
      <div className="flex flex-col">
        <img src={businessImg} alt="Business image" className="size-28" />
        <p className="font-medium">Business name</p>
        <span>Registered since: </span> <span>00-00-00</span>
      </div>
      <div>
        <h2 className="font-semibold my-5">Owner</h2>
        <div>
          <img
            src={userImg}
            alt="User image"
            className="rounded-full size-28"
          />
          <p className="font-medium mt-3">Username</p>
        </div>
      </div>
    </Card>
  );
}
