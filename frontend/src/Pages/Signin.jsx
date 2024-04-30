import { Header } from "../Components/Header";
import { SubHeading } from "../Components/SubHeading";
import { InputBox } from "../Components/InputBox";
import { Button } from "../Components/Button";
import { ButtomWarming } from "../Components/ButtomWarning";


export function Signin(){
    return(
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="bg-white-500 flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Header label={"Sign in"}/>
                <SubHeading label={"Enter your credentials to accesss your account"}/>
                <InputBox label={"Email"} placeholder={"john@gmail.com"}/>
                <InputBox label = {"Password"} placeholder={""}/>
                <Button label = {"Sign in"}/>
                <ButtomWarming label={"Don't have an account?"} buttonText={"Sign Up"}to={"/signup"}/>
                
            </div>
                
            </div>
        </div>
        )
    
}