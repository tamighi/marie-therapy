import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

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
            className={twMerge(
                "rounded-lg px-4 py-2 transition-colors hover:bg-hover",
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
};
