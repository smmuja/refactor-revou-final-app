import { useGetProductDetail } from "features/productsDetail/hooks";

export function ProductDetailData() {
  const { data, isLoading, isError } = useGetProductDetail();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Error fetching data</div>;
  }

  console.log(data);
  return (
    <>
      <h3 className="font-semibold">{data.product_name}</h3>
      <p className="text-gray-400">{data.product_price}</p>
      <p className="mt-3 font-medium">Description: </p>
      <p className="ml-3">{data.product_description}</p>
    </>
  );
}
