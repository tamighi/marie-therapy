import { twMerge } from "tailwind-merge";
import { Contact } from "../constants";

type Props = Contact & {
    className?: string;
    withIcon?: boolean;
};

export const ContactItem = ({
    icon,
    title,
    href,
    label,
    withIcon = true,
    className = "",
}: Props) => {
    return (
        <div className={twMerge(className)}>
            <span className="flex items-end gap-2">
                {withIcon && (
                    <a
                        href={href}
                        target="_blank"
                        className="flex gap-2 shadow-icon bg-primary p-2
                            rounded-xl"
                    >
                        <img src={icon} />
                    </a>
                )}
                <span className="font-bold">{title}:</span>
                <a href={href} target="_blank">
                    {label}
                </a>
            </span>
        </div>
    );
};
