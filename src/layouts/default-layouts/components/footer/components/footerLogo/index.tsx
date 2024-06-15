import { Link } from "react-router-dom";
import logo from "assets/logo.png";
import { homeUrl } from "config";

export function FooterLogo() {
    return (
        <>
            <Link to={homeUrl}>
                <img src={logo} alt="Logo" />
            </Link>
        </>
    )
} 