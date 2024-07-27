import { useQuery } from "react-query";
import businessImg from "assets/business.png";
import userDummy from "assets/userDummy.png";

// import { businessesResponse } from "features/businesses/api";
import { profileResponse } from "../api";

export function useGetUser() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["userData"],
    queryFn: profileResponse,
  });

  const user = {
    username: data?.username,
    email: data?.email,
    business_total: data?.business_amount,
    product_total: data?.product_amount,
    phone_number: data?.phone_number,
    occupation: data?.occupation,
    description: data?.description,
    profileImgUrl: data?.profile_url ? data?.profile_url : userDummy,

    created_at: data?.create_at
      ? new Date(data?.create_at).toLocaleDateString()
      : "",
  };

  console.log(data);

  const userBusiness = data?.business.map((item) => ({
    id: item.id,
    business_name: item.business_name,
    business_type: item.business_types,
    business_description: item.description,
    business_img_url: item.profile_url ? item.profile_url : businessImg,

    created_at: new Date(item.create_at).toLocaleDateString(),
  }));
  console.log(userBusiness);

  return {
    User: user,
    UserBusiness: userBusiness,
    isError,
    isLoading,
  };
}
