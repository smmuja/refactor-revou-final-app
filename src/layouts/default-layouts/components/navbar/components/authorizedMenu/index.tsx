import { LogoutIcon, UserIcon } from "assets/internalIcon";
import { Link } from "react-router-dom";

export function AuthorizedMenu() {
  return (
    <div className="flex  gap-3">
      <Link to="/login" className="flex gap-3 p-3 bg-yellow-300 rounded-sm">
        <UserIcon />
        <span>Profile</span>
      </Link>
      <Link to="/register" className="flex gap-3 p-3 bg-yellow-300 rounded-sm">
        <LogoutIcon />
        <span>Logout</span>
      </Link>
    </div>
  );
}
