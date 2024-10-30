import { twMerge } from "tailwind-merge";

type Props = {
    label: string;
    className?: string;
};

export const Fieldset = ({ label, className = "" }: Props) => {
    return (
        <h2
            className={twMerge(
                "font-bold border-b-secondary border-b-2 max-w-fit",
                className,
            )}
        >
            {label}
        </h2>
    );
};
