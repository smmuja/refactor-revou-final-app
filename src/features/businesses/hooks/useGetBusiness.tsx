import { useQuery } from "react-query";
import businessImg from "assets/business.png";
import { businessesResponse } from "features/businesses/api";

export function useGetBusiness() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["businessData"],
    queryFn: businessesResponse,
  });

  const business = data?.map((item) => ({
    id: item.id,
    username: item.username,
    user_email: item.user_email,
    profile_url: item.profile_url ? item.profile_url : businessImg,
    business_name: item.business_name,
    business_types: item.business_types,
    description: item.description,
    created_at: new Date(item.create_at),
  }));

  return {
    data: business,
    isError,
    isLoading,
  };
}
