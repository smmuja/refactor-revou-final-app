import { Button } from "features/base";

export function UserInformation() {
  return (
    <>
      <div className="flex justify-between">
        <h3 className="font-bold">User Information</h3>
        <Button className="w-1/4 bg-yellow-400">Edit Profile</Button>
      </div>
    </>
  );
}
