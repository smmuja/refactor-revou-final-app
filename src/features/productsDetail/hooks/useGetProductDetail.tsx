import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { ProductDetailResponse } from "../api";

export function useGetProductDetail() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["productDetailData"],
    queryFn: () => ProductDetailResponse(String(id)),
  });

  const currencyIDR = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const product = {
    id: data?.id,
    product_name: data?.product_name,
    product_price:
      data?.product_price && currencyIDR.format(data?.product_price),
    product_description: data?.description,

    created_at: data?.create_at ? new Date(data?.create_at) : "",

    business_name: data?.business_name,
    business_id: data?.business_id,

    username: data?.username,
    user_id: data?.user_id,

    product_images: data?.product_images,
  };

  return {
    data: product,
    isError,
    isLoading,
  };
}
