import { Card } from "features/base";
import {
  UserBusiness,
  UserData,
  UserImage,
  UserInformation,
} from "features/profile";

export function ProfileWrapper() {
  return (
    <Card className="max-w-screen-sm">
      <UserInformation />
      <UserImage />
      <UserData />
      <UserBusiness />
    </Card>
  );
}
