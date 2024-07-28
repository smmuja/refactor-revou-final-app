import { useQuery } from "react-query";
import businessImg from "assets/business.png";
import { businessDetailResponse } from "../api";
import { useParams } from "react-router-dom";
import productImg from "assets/product.png";

export function useGetBusinessDetail() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["businessDetailData"],
    queryFn: () => businessDetailResponse(String(id)),
  });

  const businessInfo = {
    business_id: data?.id,
    business_name: data?.business_name,
    business_types: data?.business_types,
    description: data?.description,
    businessImgUrl: data?.profile_url ? data?.profile_url : businessImg,

    product_amount: data?.product.length,
    username: data?.username,
    user_email: data?.user_email,

    created_at: data?.create_at ? new Date(data?.create_at) : "",
  };

  const currencyIDR = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const productInfo = data?.product.map((item) => ({
    product_id: item.id,
    product_name: item.product_name,
    product_price: item.product_price && currencyIDR.format(item.product_price),
    product_description: item.description,
    product_img: item.profile_url ? item.profile_url : productImg,
  }));

  return {
    data: businessInfo,
    product: productInfo,
    isError,
    isLoading,
  };
}
