import { ProductDetailEditButton } from "features/productsDetail";

export function ProductDetailHead() {
  return (
    <div className="flex justify-between mb-5 items-center">
      <h2 className="font-semibold">Product Information</h2>
      <ProductDetailEditButton />
    </div>
  );
}
