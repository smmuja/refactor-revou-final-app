import { useQuery } from "react-query";
import businessImg from "assets/business.png";
import { businessDetailResponse } from "../api";
import { useParams } from "react-router-dom";

export function useGetBusinessDetail() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["businessDetailData"],
    queryFn: () => businessDetailResponse(String(id)),
  });

  const business = {
    id: data?.id,
    business_name: data?.business_name,
    business_types: data?.business_types,
    description: data?.description,
    businessImgUrl: data?.profile_url ? data?.profile_url : businessImg,

    product_amount: data?.product.length,
    username: data?.username,
    user_email: data?.user_email,

    created_at: data?.create_at ? new Date(data?.create_at) : "",
  };

  return {
    data: business,
    isError,
    isLoading,
  };
}
