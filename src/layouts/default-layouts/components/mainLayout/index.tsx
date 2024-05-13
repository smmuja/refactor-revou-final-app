import { NavWrapper } from "layouts/default-layouts";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <main>
      <NavWrapper />
      <Outlet />
    </main>
  );
}
