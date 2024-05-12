import { NavMenu } from "layouts/default-layouts";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <main>
      <NavMenu />
      <Outlet />
    </main>
  );
}
