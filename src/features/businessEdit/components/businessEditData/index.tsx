import { Card, Input } from "features/base";
import { BusinessEditBusinessType } from "features/businessEdit";

export function BusinessEditData() {
  return (
    <Card className="my-3">
      <form>
        <table className="w-full">
          <tr className="py-3">
            <th className="text-left">Business Type</th>
            <td>
              <BusinessEditBusinessType />
            </td>
          </tr>

          <tr className="py-3">
            <th className="text-left">Business Name</th>
            <td>
              <Input name="business-name" placeholder="Business name"></Input>
            </td>
          </tr>

          <tr className="py-3">
            <th className="text-left">Description</th>
            <td>
              <Input
                type="text"
                name="business-description"
                placeholder="Description"
              ></Input>
            </td>
          </tr>
        </table>
      </form>
    </Card>
  );
}
