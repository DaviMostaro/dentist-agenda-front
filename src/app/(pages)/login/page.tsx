import { Button } from "@/components/ui/button";
import InitialRightScreen from "@/components/ui/initialRightScreen";
import Input from "@/components/ui/input";

export default function LoginPage() {
    return (
        <div>
            <div className="w-full h-screen flex flex-row">
                <div className="w-[43%] h-screen flex flex-col items-center gap-3">
                    <h1 className="text-6xl font-bold mt-20 mb-20">Login</h1>

                    <Input label='Email' placeholder='Enter your email' type='email' />     
                    <Input label='Password' placeholder='Enter your password' type='password' /> 
                    <p className="text-sm font-semibold text-blue-500 cursor-pointer hover:underline">Forgot your password?</p>       
                    <Button className="w-sm h-12 cursor-pointer mt-10">Sign in</Button> 

                    <p className="text-sm font-semibold mt-10">Don't have an account? <span className="text-blue-500 cursor-pointer hover:underline">Sign up</span></p>
                </div>
                <InitialRightScreen />
            </div>
        </div>
    )
}