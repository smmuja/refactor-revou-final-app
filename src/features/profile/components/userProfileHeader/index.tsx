import { profileEditUrl } from "config";
import { Button } from "features/base";
import { useNavigate } from "react-router-dom";

export function UserProfileHeader() {
  const navigate = useNavigate();
  const handleEditProfile = () => {
    navigate(profileEditUrl);
  };
  return (
    <div className="flex justify-between mb-3">
      <h3 className="font-bold">User Information</h3>
      <Button onClick={handleEditProfile} className="w-1/4 bg-yellow-400">
        Edit Profile
      </Button>
    </div>
  );
}
