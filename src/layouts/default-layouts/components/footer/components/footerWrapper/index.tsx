import { FooterLogo, FooterMenu } from "layouts/default-layouts";

export function FooterWrapper() {
  return (
    <div className="py-5 mt-20 bg-green-500 sticky bottom-0 w-full ">
      <FooterLogo />
      <FooterMenu />
    </div>
  );
}
