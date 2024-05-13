import { Link } from "react-router-dom";
import logo from "assets/logo.png";

export function NavLogo() {
  return (
    <>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </>
  );
}
