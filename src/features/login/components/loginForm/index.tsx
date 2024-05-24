import { EyeCloseIcon, EyeOpenIcon } from "assets";
import { Card, Input, Button } from "features/base";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { homeUrl, registerUrl } from "config";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const loginHandler = () => {
    navigate(homeUrl);
  };

  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Card className="space-y-2 shadow-lg p-5 rouded-lg">
      <p className="text-center text-xl mb-2">Login Form</p>
      <Input label="E-mail" />
      <Input
        label="Password"
        type={showPassword ? "text" : "password"}
        rightNode={showPassword ? <EyeCloseIcon /> : <EyeOpenIcon />}
        rightNodeClick={showPasswordHandler}
      />
      <Button onClick={loginHandler} className="bg-green-500">
        Login
      </Button>
      <p className="text-center text-xs">
        Not registered? Click <Link to={registerUrl}>Register</Link>
      </p>
    </Card>
  );
}
