import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "outlined" | "contained" | "text";
};

const baseStyleClasses =
    "rounded-lg px-4 py-2 transition-colors text-primary hover:bg-opacity-20 hover:bg-primary";

const styleClasses: { [K in Props["variant"] as string]: string } = {
    outlined: twMerge(baseStyleClasses, "border-primary border-2"),
    contained: twMerge(
        baseStyleClasses,
        "bg-primary text-secondary-text hover:bg-opacity-70",
    ),
    text: baseStyleClasses,
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
