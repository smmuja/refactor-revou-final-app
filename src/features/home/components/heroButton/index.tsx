import { Button } from "features/base";
import { useNavigate } from "react-router-dom";
import { loginUrl, profileUrl, registerUrl } from "config";

export function HeroButton() {
  const navigate = useNavigate();
  const loginHandler = () => {
    navigate(loginUrl);
  };
  const registerHandler = () => {
    navigate(registerUrl);
  };

  return (
    <div className="mt-20 my-20 p-10 space-x-24 flex">
      <Button onClick={registerHandler} className="bg-green-500">
        Create Account
      </Button>
      <Button onClick={loginHandler} className="bg-yellow-500">
        Login
      </Button>
    </div>
  );
}
