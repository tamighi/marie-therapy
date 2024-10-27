import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};

export const BaseButton = ({ className = "", children, ...props }: Props) => {
    return (
        <button
            className={`rounded-lg px-4 py-2 hover:bg-hover transition-colors ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
