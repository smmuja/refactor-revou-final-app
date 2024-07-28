import { Card } from "features/base";
import businessImg from "assets/business.png";
import userImg from "assets/userDummy.png";
import { useGetProductDetail } from "features/productsDetail/hooks";
import { useNavigate } from "react-router-dom";

export function ProductDetailBusinessInformation() {
  const { data, isLoading, isError } = useGetProductDetail();

  if (isLoading) {
    <div>Loading ...</div>;
  }

  if (isError) {
    <div>Error fetching data</div>;
  }

  const handleNavigateBusiness = () => {
    navigate(`/businesses-detail/${data.business_id}`);
  };

  const handleNavigateUser = () => {
    navigate(`/profile`);
    // navigate(`/profile/${data.user_id}`);
  };

  const navigate = useNavigate();
  return (
    <Card className="mt-5">
      <h2 className="font-semibold mb-5">About the business</h2>
      <div
        onClick={handleNavigateBusiness}
        className="flex flex-col hover:cursor-pointer"
      >
        <img src={businessImg} alt="Business image" className="size-28" />
        <p className="font-medium">{data.business_name}</p>
        <span>Registered since: </span> <span>00-00-00</span>
      </div>
      <div onClick={handleNavigateUser} className="hover:cursor-pointer">
        <h2 className="font-semibold my-5">Owner</h2>
        <div>
          <img
            src={userImg}
            alt="User image"
            className="rounded-full size-28"
          />
          <p className="font-medium mt-3">{data.username}</p>
        </div>
      </div>
    </Card>
  );
}
