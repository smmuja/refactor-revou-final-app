import { EyeCloseIcon, EyeOpenIcon } from "assets";
import { Card, Input, Button } from "features/base";
import { SetStateAction, Dispatch, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate();
    const loginHandler = () => {
        navigate("/home");
    };

    const showPasswordHandler = (callBack: Dispatch<SetStateAction<boolean>>) => {
        callBack(prev => !prev);
    }

    return (
        <Card className="space-y-2 shadow shadow-lg p-5 rouded-lg">
            <p className="text-center text-xl mb-2">Login Form</p>
            <Input label="E-mail"/>
            <Input 
               label="Password"
               type={showPassword ? "text" : "password"}
               rightNode={showPassword ? <EyeCloseIcon/> : <EyeOpenIcon/>}
               rightNodeClick={() => showPasswordHandler(setShowPassword)}
            />
            <Button onClick={loginHandler} className="bg-green-500">
                Login
            </Button>
            <p className="text-center text-xs"> Not registered? Click <Link to="/register">Register</Link></p>
        </Card>
    )
}
