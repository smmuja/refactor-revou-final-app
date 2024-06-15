import { Card, Input } from "features/base";

export function ProductEditData() {
  return (
    <Card className="my-3">
      <form action="">
        <table className="w-full">
          <tr className="py-3">
            <th className="text-left">Product Name</th>
            <td>
              <Input name="product-name" placeholder="Product name"></Input>
            </td>
          </tr>
          <tr className="py-3">
            <th className="text-left">Price</th>
            <td>
              <Input
                type="number"
                name="product-price"
                placeholder="100000"
              ></Input>
            </td>
          </tr>

          <tr className="py-3">
            <th className="text-left">Description</th>
            <td>
              <Input
                type="text"
                name="product-description"
                placeholder="Product description"
              ></Input>
            </td>
          </tr>
        </table>
      </form>
    </Card>
  );
}
