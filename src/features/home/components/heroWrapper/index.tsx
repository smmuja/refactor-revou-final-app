import { HeroLogo, HeroText, HeroButton } from "features/home";
import landingImage from "assets/landing1.png";

export function HeroWrapper() {
  return (
    <div
      className="text-center flex-row  items-center justify-center place-items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${landingImage})` }}
    >
      <HeroLogo />
      <HeroText />
      <HeroButton />
    </div>
  );
}
