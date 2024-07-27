import productImg from "assets/product.png";
import { productsResponse } from "../api";
import { useQuery } from "react-query";

export function useGetProducst() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["productsData"],
    queryFn: productsResponse,
  });

  console.log(data);

  const currencyIDR = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const products = data?.map((item) => ({
    product_id: item.id,
    product_name: item.product_name,
    product_price: currencyIDR.format(item.product_price),
    product_description: item.description,
    product_img_url: item.profile_url ? item.profile_url : productImg,
    created_at: new Date(item.create_at),

    username: item.username,
    business_name: item.business_name,
  }));

  return {
    data: products,
    isError,
    isLoading,
  };
}
