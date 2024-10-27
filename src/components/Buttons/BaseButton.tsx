import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const BaseButton = ({ className = "", ...props }: BaseButtonProps) => {
    return (
        <button
            className={twMerge(
                "rounded-lg px-4 py-2 transition-colors hover:bg-[#00000022]",
                className,
            )}
            {...props}
        />
    );
};
