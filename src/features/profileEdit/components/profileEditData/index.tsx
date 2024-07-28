import { profileUrl } from "config";
import { Card, Input } from "features/base";
import { useGetUser } from "features/profile/hooks";
import { profileEditRequest } from "features/profileEdit/api";
import { ProfileEditRequestProps } from "features/profileEdit/types";
import { FormEvent } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { ProfileEditButton } from "../profileEditButton";

export function ProfileEditData() {
  const { User, isLoading, isError } = useGetUser();

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (payload: ProfileEditRequestProps) =>
      profileEditRequest(payload),
    onSuccess: () => {
      navigate(profileUrl);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const profileEditHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const username = formData.get("username");
    const email = formData.get("email");
    const address = formData.get("address");
    const occupation = formData.get("occupation");
    const phone_number = formData.get("phone_number");
    const description = formData.get("description");

    const payload = {
      username: username?.toString(),
      email: email?.toString(),
      address: address?.toString(),
      occupation: occupation?.toString(),
      phone_number: phone_number?.toString(),
      description: description?.toString(),
    };

    mutate(payload);
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Error fetching data</div>;
  }
  if (!isLoading && !isError) {
    return (
      <Card className="my-3">
        <form onSubmit={profileEditHandler}>
          <table className="w-full">
            <tr className="py-3">
              <th className="text-left">Username</th>
              <td>
                <Input
                  name="username"
                  placeholder="Username"
                  defaultValue={User.username}
                ></Input>
              </td>
            </tr>
            <tr className="py-3">
              <th className="text-left">Email</th>
              <td>
                <Input
                  type="text"
                  name="email"
                  placeholder="Email@email.com"
                  defaultValue={User?.email}
                ></Input>
              </td>
            </tr>

            <tr className="py-3">
              <th className="text-left">Phone Number</th>
              <td>
                <Input
                  type="text"
                  name="phone_number"
                  placeholder="088888"
                  defaultValue={User?.phone_number}
                ></Input>
              </td>
            </tr>
            <tr className="py-3">
              <th className="text-left">Occupation</th>
              <td>
                <Input
                  type="text"
                  name="occupation"
                  placeholder="Occupation"
                  defaultValue={User?.occupation}
                ></Input>
              </td>
            </tr>
            <tr className="py-3">
              <th className="text-left">Bio</th>
              <td>
                <Input
                  type="text"
                  name="description"
                  placeholder="Bio"
                  defaultValue={User?.description}
                ></Input>
              </td>
            </tr>
          </table>
          <ProfileEditButton />
        </form>
      </Card>
    );
  }
}
