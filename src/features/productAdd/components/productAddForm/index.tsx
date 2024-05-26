import { Button, Input } from "features/base";
import {
  ProductAddBusinessID,
  ProductAddImageButton,
} from "features/productAdd";
import { Form } from "react-router-dom";

export function ProductAddForm() {
  return (
    <Form>
      <ProductAddBusinessID />
      <Input label="Product name" />
      <Input label="Product price" type="number" />
      <Input label="Product description" />

      <ProductAddImageButton />

      <Button className="bg-green-500 mt-5">Submit</Button>
    </Form>
  );
}
