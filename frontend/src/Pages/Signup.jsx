import { Header } from "../Components/Header";
import { ButtomWarming } from "../Components/ButtomWarning";
import { Button } from "../Components/Button";
import { InputBox } from "../Components/InputBox";
import { SubHeading } from "../Components/SubHeading";
import { useState } from "react";
import axios from "axios";

export function Signup(){
    const [firstName,setfirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
 
     return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="bg-white-500 flex flex-col justify-center">
                
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Header label = {"Signup"} />
                
                <SubHeading label={"Enter your infromation to create an account"}/>
                
                
                <InputBox onChange={e=>{setfirstName(e.target.value)}}
                placeholder="John" label={"First Name"} />

                <InputBox onChange={e=>{setLastName(e.target.value)}} placeholder="Doe" label={"Last Name"} />
                <InputBox onChange={e=>{setUserName(e.target.value)}} placeholder="harkirat@gmail.com" label={"Email"} />
                <InputBox onChange={e=>{setPassword(e.target.value)}} placeholder="123456" label={"Password"} />
                <div className="pt-4">
                    <Button onClick={async ()=>{
                       const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                            userName,
                            firstName,
                            lastName,
                            password
                        });
                        localStorage.setItem("tokens",response.data.token);
                    }} label={"Sign Up"}/>
                </div>
                
                <ButtomWarming label = {"Already have an account"} buttonText={"Sign in"} to={"/signin "}/>
                </div>
                
            </div>
        </div>
     )
}
