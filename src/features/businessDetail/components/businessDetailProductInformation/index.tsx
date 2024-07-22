import { Card } from "features/base";
import productImg from "assets/product.png";

import { useGetBusinessDetail } from "features/businessDetail/hooks/useGetBusinessDetail";
import { NotFoundComponent } from "features/base";

export function BusinessDetailProductInformation() {
  const { data, isError, isLoading } = useGetBusinessDetail();

  if (isError) {
    return <div>Error fetching data</div>;
  }

  if (isLoading) {
    return <div>Loading ... </div>;
  }

  return (
    <>
      <Card className="mt-5 bg-gray-100">
        <h2 className="font-semibold">Products</h2>
        {data.product_amount !== 0 ? (
          <Card className="my-5 bg-gray-50">
            <img src={productImg} alt="" />
            <p className="font-medium">Product name</p>
            <p className="text-gray-400">Rp100.000</p>
            <p className="truncate ...">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis soluta dignissimos, similique nemo blanditiis ipsam
              accusantium, quidem sequi aut hic maiores voluptatum consequuntur.
              Excepturi expedita tempora veritatis eos corrupti aliquam!
            </p>
          </Card>
        ) : (
          <NotFoundComponent message="No product yet" />
        )}
      </Card>
    </>
  );
}
