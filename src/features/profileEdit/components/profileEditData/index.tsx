import { Card, Input } from "features/base";

export function ProfileEditData() {
  return (
    <Card className="my-3">
      <form action="">
        <table className="w-full">
          <tr className="py-3">
            <th className="text-left">Username</th>
            <td>
              <Input
                name="username"
                placeholder=""
                defaultValue={"amia"}
              ></Input>
            </td>
          </tr>
          <tr className="py-3">
            <th className="text-left">Email</th>
            <td>
              <Input
                type="text"
                name="email"
                placeholder="Email"
                defaultValue={"email@email.com"}
              ></Input>
            </td>
          </tr>

          <tr className="py-3">
            <th className="text-left">Phone Number</th>
            <td>
              <Input
                type="text"
                name="phone_number"
                placeholder=""
                defaultValue={"088888"}
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
                defaultValue={"Occupation"}
              ></Input>
            </td>
          </tr>
          <tr className="py-3">
            <th className="text-left">Bio</th>
            <td>
              <Input
                type="text"
                name="Bio"
                placeholder="Bio"
                defaultValue={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ipsa sequi labore non aut unde corporis placeat! Voluptatibus quam, dolorem harum sapiente eveniet itaque, voluptas ad quasi, nemo vitae expedita!"
                }
              ></Input>
            </td>
          </tr>
        </table>
      </form>
    </Card>
  );
}
