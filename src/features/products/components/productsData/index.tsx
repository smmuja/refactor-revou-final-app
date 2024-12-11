import { Button, Card } from "features/base";
import { useGetProducst } from "features/products/hooks";
import { useNavigate } from "react-router-dom";
import businessImg from "assets/business.png";

export function ProductsData() {
  const { data } = useGetProducst();

  const navigate = useNavigate();

  console.log(data);
  return (
    <>
      {data?.map((item) => {
        return (
          <Card>
            <div className="flex gap-5 items-center mb-5">
              <img
                src={businessImg}
                alt="business picture"
                className="size-10 rounded-full"
              />
              <p>{item.business_name}</p>
            </div>
            <div key={item.product_id}>
              <img src={item.product_img_url} alt="Product Image" />
              <h3 className="font-medium">{item.product_name}</h3>
              <p className="text-gray-400">{item.product_price}</p>
              <p className="ml-3 truncate">{item.product_description}</p>
            </div>

            <Button
              onClick={() => navigate(`/products/${item.product_id}`)}
              className="bg-green-500 mt-5"
            >
              Product Detail
            </Button>
          </Card>
        );
      })}
    </>
  );
}
