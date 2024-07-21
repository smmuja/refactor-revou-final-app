import { profileUrl, token } from "config";
import { Button, Input } from "features/base";
import {
  BusinessAddBusinessType,
  BusinessAddImageButton,
  businessAddRequest,
  businessAddRequestProps,
} from "features/businessAdd";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import Cookies from "js-cookie";
import { FormEvent } from "react";

export function BusinessAddForm() {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (payload: businessAddRequestProps) =>
      businessAddRequest(payload),
    onSuccess: () => {
      // const { access_token } = data;
      Cookies.get(token);
      navigate(profileUrl);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const addBusinessHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const business_name = formData.get("business_name");
    const business_types = formData.get("business_types");
    const description = formData.get("description");

    const payload = {
      business_name: business_name!.toString(),
      business_types: business_types!.toString(),
      description: description!.toString(),
    };

    mutate(payload);
  };

  return (
    <form onSubmit={addBusinessHandler}>
      <BusinessAddBusinessType />
      <Input label="Business name" name="business_name" />
      <Input label="Business description" name="description" />

      <BusinessAddImageButton />

      <Button className="bg-green-500 mt-5">Submit</Button>
    </form>
  );
}
