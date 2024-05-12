import { Card, Input, Button } from "features/base";
import { useNavigate } from "react-router-dom";

export function RegisterForm() {
  const navigate = useNavigate();
  const registerHandler = () => {
    navigate("/business");
  };
  return (
    <Card>
      <Input label="E-mail" className="" />
      <Input label="Username" className="" />
      <Input label="Password" className="" />
      <Input label="Confirm Password" className="" />
      <Button onClick={registerHandler} className="bg-green-500">
        Register
      </Button>
    </Card>
  );
}
