import { ProfileEditButton } from "../profileEditButton";
import { ProfileEditData } from "../profileEditData";
import { ProfileEditImage } from "../profileEditImage";
import { ProfileEditHead } from "../profileEditHead";
import { Card } from "features/base";

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
