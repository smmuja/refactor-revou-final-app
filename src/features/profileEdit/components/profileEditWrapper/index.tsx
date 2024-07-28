import { Card } from "features/base";

import {
  ProfileEditHead,
  ProfileEditImage,
  ProfileEditData,
} from "features/profileEdit";

export function ProfileEditWrapper() {
  return (
    <Card className="border-0">
      <ProfileEditHead />
      <ProfileEditImage />
      <ProfileEditData />
    </Card>
  );
}
