import userDummy from "assets/userDummy.png";
import { Button, Card } from "features/base";

export function ProfileEditImage() {
  return (
    <Card>
      <img src={userDummy} alt="User image" />
      <Button className="w-full mt-3 bg-yellow-500">Edit Image</Button>
    </Card>
  );
}
