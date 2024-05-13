import {
  AuthorizedMenu,
  NavLogo,
  NavMenu,
  UnauthorizedMenu,
} from "layouts/default-layouts";

export function NavWrapper() {
  const auth = true;

  return (
    <nav className="p-3 bg-green-500">
      <div className="flex items-center justify-between">
        <NavLogo />
        <div>
          <NavMenu />
        </div>
        <div>{auth ? <AuthorizedMenu /> : <UnauthorizedMenu />}</div>
      </div>
    </nav>
  );
}
