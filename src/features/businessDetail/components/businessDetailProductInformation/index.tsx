import { Card } from "features/base";
import productImg from "assets/product.png";
import { ProductAddButton } from "features/businessDetail";

export function BusinessDetailProductInformation() {
  return (
    <Card className="mt-5 bg-gray-100">
      <h2 className="font-semibold">Products</h2>
      <Card className="my-5 bg-gray-50">
        <img src={productImg} alt="" />
        <p className="font-medium">Product name</p>
        <p className="text-gray-400">Rp100.000</p>
        <p className="truncate ...">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          soluta dignissimos, similique nemo blanditiis ipsam accusantium,
          quidem sequi aut hic maiores voluptatum consequuntur. Excepturi
          expedita tempora veritatis eos corrupti aliquam!
        </p>
      </Card>
      <ProductAddButton />
    </Card>
  );
}
