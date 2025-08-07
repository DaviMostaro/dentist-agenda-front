import Input from "@/components/ui/input";

export default function LoginPage() {
    return (
        <div>
            <div className="w-full h-screen flex flex-row">
                <div className="w-[43%] h-screen flex flex-col items-center gap-3">
                    <h1 className="text-6xl font-bold mt-20 mb-20">Login</h1>

                    <Input label='Email' placeholder='Enter your email' type='email' />     
                    <Input label='Password' placeholder='Enter your password' type='password' />         
                </div>
                <div className="w-[57%] h-screen bg-blue-500 flex flex-col justify-center items-center">
                    <h1 className="text-3xl text-white font-bold mt-5">Welcome to your Dentist Agenda</h1>
                    <h2 className="text-xl text-white font-semibold mt-5">Schedule your patients and organize your clinic quickly and easily.</h2>
                </div>
            </div>
        </div>
    )
}