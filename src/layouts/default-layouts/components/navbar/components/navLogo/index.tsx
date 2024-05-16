import { Link } from "react-router-dom";
import logo from "assets/logo.png";
import { homeUrl } from "config";

export function NavLogo() {
  return (
    <>
      <Link to={homeUrl}>
        <img src={logo} alt="" />
      </Link>
    </>
  );
}
