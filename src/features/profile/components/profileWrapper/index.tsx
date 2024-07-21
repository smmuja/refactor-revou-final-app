import { Card } from "features/base";
import { UserBusiness, UserData, UserProfileHeader } from "features/profile";

export function ProfileWrapper() {
  return (
    <Card className="max-w-screen-sm">
      <UserProfileHeader />
      {/* <UserImage /> */}
      <UserData />
      <UserBusiness />
    </Card>
  );
}
