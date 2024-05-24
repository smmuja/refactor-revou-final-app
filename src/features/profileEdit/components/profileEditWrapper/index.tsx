import { Card } from "features/base";

import {
  ProfileEditHead,
  ProfileEditImage,
  ProfileEditData,
  ProfileEditButton,
} from "features/profileEdit";

export function ProfileEditWrapper() {
  return (
    <Card className="border-0">
      <ProfileEditHead />
      <ProfileEditImage />
      <ProfileEditData />
      <ProfileEditButton />
    </Card>
  );
}
