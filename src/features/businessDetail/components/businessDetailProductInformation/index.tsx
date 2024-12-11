import { Card } from "features/base";

import { useGetBusinessDetail } from "features/businessDetail/hooks/useGetBusinessDetail";
import { NotFoundComponent } from "features/base";
import { useNavigate } from "react-router-dom";
import { productsUrl } from "config";

export function BusinessDetailProductInformation() {
  const navigate = useNavigate();

  const { data, product, isError, isLoading } = useGetBusinessDetail();

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
          <>
            {product?.map((item) => {
              const handleProductDetail = () => {
                navigate(`${productsUrl}/${item.product_id}`);
              };
              return (
                <Card
                  key={item.product_id}
                  onClick={handleProductDetail}
                  className="my-5 bg-gray-50 hover:cursor-pointer"
                >
                  <img src={item.product_img} alt="" />
                  <p className="font-medium">{item.product_name}</p>
                  <p className="text-gray-400">{item.product_price}</p>
                  <p className="truncate ...">{item.product_description}</p>
                </Card>
              );
            })}
            {/* <img src={productImg} alt="" />
              <p className="font-medium">Product name</p>
              <p className="text-gray-400">Rp100.000</p>
              <p className="truncate ...">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis soluta dignissimos, similique nemo blanditiis ipsam
                accusantium, quidem sequi aut hic maiores voluptatum consequuntur.
                Excepturi expedita tempora veritatis eos corrupti aliquam!
              </p> */}
          </>
        ) : (
          <NotFoundComponent message="No product yet" />
        )}
      </Card>
    </>
  );
}
