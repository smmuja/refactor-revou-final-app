import { LogoutIcon, UserIcon } from "assets/internalIcon";
import { Button } from "features/base";
import { Link } from "react-router-dom";

export function AuthorizedMenu() {
  return (
    <div className="flex  gap-3">
      <Link to="/profile" className="flex gap-3 p-3 bg-yellow-300 rounded-sm">
        <UserIcon />
        <span>Profile</span>
      </Link>
      <Button className="flex gap-3 p-3 bg-yellow-300 rounded-sm">
        <LogoutIcon />
        <span>Logout</span>
      </Button>
    </div>
  );
}
