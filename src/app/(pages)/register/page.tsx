import { Button } from "@/components/ui/button";
import InitialRightScreen from "@/components/ui/initialRightScreen";
import Input from "@/components/ui/input";

export default function RegisterPage() {
    return (
        <div>
            <div className="w-full h-screen flex flex-row">
                <div className="w-[43%] h-screen flex flex-col items-center gap-3">
                    <h1 className="text-6xl font-bold mt-15 mb-15">Register</h1>

                    <Input label='Name' placeholder='Enter your name' type='text' />     
                    <Input label='Email' placeholder='Enter your email' type='email' />     
                    <Input label='Password' placeholder='Enter your password' type='password' /> 
                    <Input label='Confirm Password' placeholder='Confirm your password' type='password' />        
                    <Button className="w-sm h-12 cursor-pointer mt-10">Sign up</Button> 

                    <p className="text-sm font-semibold mt-10">Have an account already? <span className="text-blue-500 cursor-pointer hover:underline">Sign in</span></p>
                </div>
                <InitialRightScreen />
            </div>
        </div>
    )
}