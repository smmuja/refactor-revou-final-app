import { Button, DataPair } from "features/base";
import { useGetBusinessDetail } from "features/businessDetail/hooks";

export function BusinessDetailData() {
  const { data, isError, isLoading } = useGetBusinessDetail();

  if (isLoading) {
    return <div> Loading ... </div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  console.log(data);

  return (
    <>
      <div className="flex justify-between my-2">
        <h3 className="font-medium">{data?.business_name}</h3>
        <Button
          disabled
          className="w-fit px-3 py-0 rounded-md bg-orange-500 hover:bg-opacity-100"
        >
          {data?.business_types}
        </Button>
      </div>
      <DataPair label={"Product Amount"} data={data?.product_amount} />
      <p className="mt-3 font-medium">Contact</p>
      <DataPair label={"Username"} data={data?.username} />
      <DataPair label={"Email"} data={data?.user_email} />
      <p className="mt-5 font-medium">Business Description</p>
      <p className="ml-3 mt-2">{data?.description}</p>
    </>
  );
}
