import {forwardRef} from "react"
import { twMerge } from "tailwind-merge";

interface ButtonProps
extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) =>{
    return (
        <button
            type={type}
            className={twMerge('w-full rounded-full bg-blue-400 border border-tranparent px-3 py-3 disabled:corsor-not-allowed disabled:opcity-50 text-black font-bold hover:opacity-75 transition',
                className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    );
})


export default Button;