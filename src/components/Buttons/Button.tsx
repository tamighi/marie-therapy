import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "outlined" | "contained" | "text";
};

const baseStyleClass =
    "rounded-lg px-4 py-2 transition-colors hover:bg-[#00000022]";

const styleClasses: { [K in Props["variant"] as string]: string } = {
    outlined: `${baseStyleClass} border-primary text-primary border-2`,
    contained: `${baseStyleClass} bg-primary text-secondary-text hover:bg-opacity-70 hover:bg-primary`,
    text: `${baseStyleClass} text-primary`,
};

export const Button = ({
    variant = "contained",
    className = "",
    ...props
}: Props) => {
    return (
        <button
            className={twMerge(styleClasses[variant], className)}
            {...props}
        />
    );
};
