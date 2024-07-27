import { DataPair } from "features/base";
import { UserImage } from "features/profile/components";
import { useGetUser } from "features/profile/hooks";

export function UserData() {
  const { User, isLoading, isError } = useGetUser();

  if (isLoading) {
    return <span>Loading ...</span>;
  }
  if (isError) {
    return <span>Error: Unknown error </span>;
  }

  console.log(User);

  return (
    <>
      <UserImage src={User?.profileImgUrl} />
      <p>
        Member since <span className="text-gray-500">{User?.created_at}</span>
      </p>
      <DataPair label={"Username"} data={User?.username} />
      <DataPair label={"Email"} data={User?.email} />
      <DataPair label={"Business Total"} data={User?.business_total} />
      <DataPair label={"Product Total"} data={User?.product_total} />
      <DataPair label={"Phone Number"} data={User?.phone_number} />
      <DataPair label={"Occupation"} data={User?.occupation} />
      <p className="font-medium">Description</p>
      <p className="mt-2 ml-3">{User?.description}</p>

      <p className="mt-2 ml-3">{User?.description}</p>
    </>
  );
}
