import { Button, Input } from "features/base";
import {
  BusinessAddBusinessType,
  BusinessAddImageButton,
} from "features/businessAdd";

export function BusinessAddForm() {
  return (
    <form>
      <BusinessAddBusinessType />
      <Input label="Business name" />
      <Input label="Business description" />

      <BusinessAddImageButton />

      <Button className="bg-green-500 mt-5">Submit</Button>
    </form>
  );
}
