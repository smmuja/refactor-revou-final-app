import { Dispatch, SetStateAction, useState } from "react";
import { Card, Input, Button } from "features/base";
import { useNavigate, Link } from "react-router-dom";
import { EyeCloseIcon, EyeOpenIcon } from "assets";
import { businessesUrl, loginUrl } from "config";

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);

  const navigate = useNavigate();
  const registerHandler = () => {
    navigate(businessesUrl);
  };

  const showPasswordHandler = (callBack: Dispatch<SetStateAction<boolean>>) => {
    callBack((prev) => !prev);
  };

  return (
    <Card className="space-y-2 shadow-lg p-5 rounded-lg">
      <p className="text-center text-xl mb-2">Register Form</p>
      <Input label="E-mail" />

      <Input label="Username" />

      <Input
        label="Password"
        type={showPassword ? "text" : "password"}
        rightNode={showPassword ? <EyeCloseIcon /> : <EyeOpenIcon />}
        rightNodeClick={() => showPasswordHandler(setShowPassword)}
      />

      <Input
        label="Confirm Password"
        type={confirmShowPassword ? "text" : "password"}
        rightNode={confirmShowPassword ? <EyeCloseIcon /> : <EyeOpenIcon />}
        rightNodeClick={() => showPasswordHandler(setConfirmShowPassword)}
      />

      <Button onClick={registerHandler} className="bg-green-500">
        Register
      </Button>

      <p className="text-center text-xs">
        Already have an account? <Link to={loginUrl}>Login</Link>
      </p>
    </Card>
  );
}
