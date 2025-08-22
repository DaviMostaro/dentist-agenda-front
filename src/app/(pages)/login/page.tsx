"use client"

import { Button } from "@/components/ui/button";
import InitialRightScreen from "@/components/ui/initialRightScreen";
import Input from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useAuth } from "@/stores/auth";
import { LoginRequest } from "@/api/requests";

const loginSchema = z.object({
    email: z.email("Insert a valid email").nonempty("Email is required"),
    password: z.string("Insert your password").min(6, "Password must be at least 6 characters").nonempty("Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {

    const auth = useAuth();

    const router = useRouter();

    const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        mode: "onSubmit"
    });

    const onSubmit = async (data: LoginFormData) => {
        const result = await LoginRequest(data.email, data.password);

        if(!result || result instanceof Error) {
            alert(result?.message || "Error registering user");
            return;
        }

        auth.setUser(result.user);
        auth.setToken(result.token);

        reset();
        router.push('/dashboard');
    }

    const goToRegister = () => {
        router.push('/register');
        reset();
    }

    return (
        <div>
            <div className="w-full h-screen flex flex-row">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }} className="w-[43%] h-screen flex flex-col items-center gap-3">
                    <h1 className="text-6xl font-bold mt-20 mb-20">Login</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className={`w-full flex flex-col items-center ${errors ? 'gap-0' : 'gap-3'}`}>
                        <Input 
                            label='Email' 
                            placeholder='Enter your email' 
                            type='email' 
                            {...register("email")}
                            error={errors.email?.message}
                        />     

                        <Input 
                            label='Password' 
                            placeholder='Enter your password' 
                            type='password' 
                            {...register("password")}
                            error={errors.password?.message}
                        /> 

                        <p className="text-sm font-semibold text-blue-500 cursor-pointer hover:underline">Forgot your password?</p>       

                        <Button className="w-sm h-12 cursor-pointer mt-10">Sign in</Button>
                    </form>

                    <p className="text-sm font-semibold mt-10">Don't have an account? <span onClick={goToRegister} className="text-blue-500 cursor-pointer hover:underline">Sign up</span></p>
                </motion.div>
                <InitialRightScreen />
            </div>
        </div>
    )
}