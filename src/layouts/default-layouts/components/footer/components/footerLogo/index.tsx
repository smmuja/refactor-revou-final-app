import { Link } from "react-router-dom";
import logo from "assets/logo.png";
import { homeUrl } from "config";

export function footerLogo() {
    return (
        <>
            <Link to={homeUrl}>
                <img src={logo} alt="Logo" />
            </Link>
        </>
    )
} 