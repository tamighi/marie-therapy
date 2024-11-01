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
                        className="flex gap-2 self-start shadow-icon bg-surface
                            p-2 rounded-xl"
                    >
                        <img src={icon} className="min-w-6 min-h-6" />
                    </a>
                )}
                <span className="break-all">
                    <span className="font-bold">{title}:&nbsp;</span>
                    <a href={href} target="_blank">
                        {label}
                    </a>
                </span>
            </span>
        </div>
    );
};
