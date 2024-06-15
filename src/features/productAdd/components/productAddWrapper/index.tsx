import { ProductAddForm, ProductAddHead } from "features/productAdd";

export function ProductAddWrapper() {
  return (
    <div className="flex flex-col justify-center items-center">
      <ProductAddHead />
      <ProductAddForm />
    </div>
  );
}
