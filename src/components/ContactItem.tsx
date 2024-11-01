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
        <div className={className}>
            <span className="flex">
                <span className="font-bold flex gap-2 items-center">
                    {withIcon && <img src={icon} />}
                    {title}
                </span>
                :&nbsp;
                <a href={href} target="_blank">
                    {label}
                </a>
            </span>
        </div>
    );
};
