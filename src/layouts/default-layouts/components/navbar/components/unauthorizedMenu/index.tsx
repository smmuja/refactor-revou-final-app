import { UserCheckIcon, UserPlusIcon } from "assets/internalIcon";
import { Link } from "react-router-dom";
import { loginUrl, registerUrl } from "config";

export function UnauthorizedMenu() {
  return (
    <div className="flex  gap-3">
      <Link to={loginUrl} className="flex gap-3 p-3 bg-yellow-300 rounded-sm">
        <UserCheckIcon />
        <span>Login</span>
      </Link>
      <Link
        to={registerUrl}
        className="flex gap-3 p-3 bg-yellow-300 rounded-sm"
      >
        <UserPlusIcon />
        <span>Register</span>
      </Link>
    </div>
  );
}
