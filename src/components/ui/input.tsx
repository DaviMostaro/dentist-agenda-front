"use client"

import { Eye, EyeOff } from "lucide-react"
import { forwardRef, useState } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    error?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(({ label, type, error, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col m-1 w-full max-w-[400px]">
            <label className="text-sm font-semibold">{label}</label>
            <div className="relative">
                <input className={`w-[100%] text-gray-700 rounded-xl border-3 ${error ? 'border-red-500': 'border-blue-100'} bg-sky-50 px-3 py-2 focus:border-3 focus:border-blue-500`} type={showPassword ? 'text' : type} {...rest} />

                {type === 'password' &&
                    <div className="cursor-pointer absolute top-3 right-3" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword &&
                            <Eye size={22} />
                        }
                        {!showPassword &&
                            <EyeOff size={22} />
                        }
                    </div>
                }
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    )
})

Input.displayName = "Input";

export default Input;