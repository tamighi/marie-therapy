import { ButtonHTMLAttributes, ReactNode } from "react";

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: ReactNode;
};

export const BaseButton = ({
    className = "",
    children,
    ...props
}: BaseButtonProps) => {
    return (
        <button
            className={`rounded-lg px-4 py-2 transition-colors hover:bg-hover
                ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
