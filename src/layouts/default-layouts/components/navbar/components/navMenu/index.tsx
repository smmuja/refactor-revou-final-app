import { AuthorizedMenu, UnauthorizedMenu } from "layouts/default-layouts";

export function NavMenu() {
  const auth = true;

  return (
    <nav className="p-3 bg-green-500">
      {auth ? <AuthorizedMenu /> : <UnauthorizedMenu />}
    </nav>
  );
}
