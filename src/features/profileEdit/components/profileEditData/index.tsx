import { Card, Input } from "features/base";

export function ProfileEditData() {
  return (
    <Card className="my-3">
      <form>
        <table className="w-full">
          <tr className="py-3">
            <th className="text-left">Username</th>
            <td>
              <Input name="username" placeholder="Username"></Input>
            </td>
          </tr>
          <tr className="py-3">
            <th className="text-left">Email</th>
            <td>
              <Input
                type="text"
                name="email"
                placeholder="Email@email.com"
              ></Input>
            </td>
          </tr>

          <tr className="py-3">
            <th className="text-left">Phone Number</th>
            <td>
              <Input
                type="text"
                name="phone_number"
                placeholder="088888"
              ></Input>
            </td>
          </tr>
          <tr className="py-3">
            <th className="text-left">Occupation</th>
            <td>
              <Input
                type="text"
                name="occupation"
                placeholder="Occupation"
              ></Input>
            </td>
          </tr>
          <tr className="py-3">
            <th className="text-left">Bio</th>
            <td>
              <Input type="text" name="Bio" placeholder="Bio"></Input>
            </td>
          </tr>
        </table>
      </form>
    </Card>
  );
}
