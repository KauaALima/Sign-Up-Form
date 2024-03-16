import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function Input({...rest}:InputProps){
    return(
        <input {...rest} 
            className="border border-Grayish py-4 px-6 rounded-lg font-medium text-DarkBlue placeholder-DarkBlue"
        />
    )
}