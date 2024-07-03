import { Table, TableRow } from "features/base";
import { profileResponse } from "features/profile/api";
import { useQuery } from "react-query";

export function UserData() {
  const { data, isLoading, isError } = useQuery({
    queryKey: [""],
    queryFn: profileResponse,
  });

  if (isLoading) {
    return <span>Loading ...</span>;
  }
  if (isError) {
    return <span>Error: Unknown error </span>;
  }

  return (
    <>
      <Table>
        <TableRow label="Username " data={data?.username}></TableRow>
        <TableRow label="Email " data={data?.email}></TableRow>
        <TableRow
          label="Business Amount "
          data={data?.business_amount}
        ></TableRow>
        <TableRow
          label="Product Amount "
          data={data?.product_amount}
        ></TableRow>
        <TableRow label="Phone number " data={data?.phone_number}></TableRow>
        <TableRow label="Occupation " data={data?.occupation}></TableRow>
        <TableRow label="Description "></TableRow>
      </Table>

      <p className="mt-2 ml-3">{data?.description}</p>
    </>
  );
}
