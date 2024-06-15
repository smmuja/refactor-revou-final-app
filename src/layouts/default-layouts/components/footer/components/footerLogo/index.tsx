import { Link } from "react-router-dom";
import logo from "assets/logo.png";
import { homeUrl } from "config";

export function FooterLogo() {
    return (
       <div className="py-5 px-10 border-b-4 border-black">
             <Link to={homeUrl}>
                <img src={logo} alt="Logo" />
            </Link>
        </div>
    )
}
