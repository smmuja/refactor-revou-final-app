import { LogoutIcon, UserIcon } from "assets/internalIcon";
import { Button } from "features/base";
import { Link, useNavigate } from "react-router-dom";
import { loginUrl, profileUrl } from "config";

export function AuthorizedMenu() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate(loginUrl);
  };

  return (
    <div className="flex  gap-3">
      <Link to={profileUrl} className="flex gap-3 p-3 bg-yellow-300 rounded-sm">
        <UserIcon />
        <span>Profile</span>
      </Link>
      <Button
        onClick={handleLogout}
        className="flex gap-3 p-3 bg-yellow-300 rounded-sm"
      >
        <LogoutIcon />
        <span>Logout</span>
      </Button>
    </div>
  );
}
