import { Card } from "features/base";
import {
  UserBusiness,
  UserData,
  UserImage,
  UserProfileHeader,
} from "features/profile";

export function ProfileWrapper() {
  return (
    <Card className="max-w-screen-sm">
      <UserProfileHeader />
      <UserImage />
      <UserData />
      <UserBusiness />
    </Card>
  );
}
