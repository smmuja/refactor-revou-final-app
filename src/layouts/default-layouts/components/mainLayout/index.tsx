import { NavWrapper, FooterWrapper } from "layouts/default-layouts";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <main>
      <NavWrapper />
      <div className="h-[100dvh]">
        <Outlet />
      </div>
      <FooterWrapper />
    </main>
  );
}
