import { Link } from "react-router-dom";

export function FooterMenu() {
  return (
    <div className="py-1 px-10 text-center space-x-4">
      <Link to="/about">
        <span>About</span>
      </Link>
      <Link to="blog">
        <span>Blog</span>
      </Link>
      <Link to="privacy-policy">
        <span>Privacy Policy</span>
      </Link>
      <Link to="support">
        <span>Support</span>
      </Link>
      <Link to="contact">
        <span>Contact</span>
      </Link>
    </div>
  );
}
