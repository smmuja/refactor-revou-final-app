import { profileUrl } from "config";
import { Button, Input } from "features/base";
import {
  ProductAddBusinessID,
  ProductAddImageButton,
  productAddRequest,
  productAddRequestProps,
} from "features/productAdd";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

// import Cookies from "js-cookie";
import { FormEvent } from "react";

export function ProductAddForm() {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: (payload: productAddRequestProps) => productAddRequest(payload),
    onSuccess: () => {
      // Cookies.get(token);
      navigate(profileUrl);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const addProductHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const product_name = formData.get("product_name");
    const product_price = formData.get("product_price");
    const business_id = formData.get("business_id");
    const description = formData.get("description");

    const payload = {
      product_name: product_name!.toString(),
      product_price: parseInt(product_price!.toString()),
      business_id: business_id!.toString(),
      description: description!.toString(),
    };

    mutate(payload);
  };

  return (
    <form onSubmit={addProductHandler}>
      <ProductAddBusinessID />
      <Input label="Product name" name="product_name" />
      <Input label="Product price" type="number" name="product_price" />
      <Input label="Product description" name="description" />

      <ProductAddImageButton />

      <Button className="bg-green-500 mt-5">Submit</Button>
    </form>
  );
}
