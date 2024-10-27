import { HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = HtmlHTMLAttributes<HTMLDivElement>;

export const Card = ({ className = "", ...props }: Props) => {
    return (
        <div
            className={twMerge(
                "p-4 rounded-md drop-shadow-main bg-primary",
                className,
            )}
            {...props}
        />
    );
};
