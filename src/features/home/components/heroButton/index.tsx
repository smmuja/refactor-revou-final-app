import { Button } from "features/base";
import { useNavigate } from "react-router-dom";

export function HeroButton() {
  const navigate = useNavigate();
  const loginHandler = () => {
    navigate("/login");
  };
  const registerHandler = () => {
    navigate("/register");
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
