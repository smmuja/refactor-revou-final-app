// import userDummy from "assets/userDummy.png";
import { profileResponse } from "features/profile";
import { useQuery } from "react-query";

export function UserImage() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [""],
    queryFn: profileResponse,
  });

  if (isLoading) {
    return <span>Loading ...</span>;
  }
  if (isError) {
    return error;
  }

  // const userImg = data?.profile_url.length > 0 ? data?.profile_url : userDummy;

  return (
    <>
      <img src={data?.profile_url} alt="User Profile" />
    </>
  );
}
