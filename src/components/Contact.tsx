import { Contact } from "../constants";

type Props = Contact;

export const Contact = (props: Props) => {
    return (
        <div>
            <span className="py-1 px-2 flex">
                <span className="font-bold flex gap-2 items-center">
                    <img src={icon} />
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
