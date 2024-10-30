import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = HTMLAttributes<HTMLDivElement>;

export const BasePage = ({ className = "", ...props }: Props) => {
    return (
        <div
            className={twMerge("max-w-7xl my-8 md:my-16 mx-auto", className)}
            {...props}
        />
    );
};
