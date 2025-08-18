"use client"

import { Button } from "@/components/ui/button";
import InitialRightScreen from "@/components/ui/initialRightScreen";
import Input from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const registerSchema = z.object({
    name: z.string().nonempty("Name is required"),
    email: z.email("Insert a valid email").nonempty("Email is required"),
    password: z.string().min(6, "Password must be at least 6 characters").nonempty("Password is required"),
    confirmPassword: z.string().min(6, "Confirm Password must be at least 6 characters"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
})

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterPage() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        mode: "onSubmit"
    });

    const onSubmit = (data: RegisterFormData) => {

    }

    return (
        <div>
            <div className="w-full h-screen flex flex-row">
                <div className="w-[43%] h-screen flex flex-col items-center gap-3">
                    <h1 className="text-6xl font-bold mt-15 mb-15">Register</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className={`w-full flex flex-col items-center ${errors ? 'gap-0' : 'gap-3'}`}>
                        <Input 
                            label='Name' 
                            placeholder='Enter your name' 
                            type='text' 
                            {...register("name")}
                            error={errors.name?.message}
                        />

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

                        <Input 
                            label='Confirm Password' 
                            placeholder='Confirm your password' 
                            type='password' 
                            {...register("confirmPassword")}
                            error={errors.confirmPassword?.message}
                        />  

                        <Button className="w-sm h-12 cursor-pointer mt-10">Sign up</Button>
                    </form>

                    <p className="text-sm font-semibold mt-10">Have an account already? <span className="text-blue-500 cursor-pointer hover:underline">Sign in</span></p>
                </div>
                <InitialRightScreen />
            </div>
        </div>
    )
}