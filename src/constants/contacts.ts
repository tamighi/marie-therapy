import { linkedin_icon, mail_icon, phone_icon } from "../assets";

export type Contact = {
    title: string;
    href: string;
    label: string;
    icon: string;
};

export const contacts: Contact[] = [
    {
        title: "Mail",
        href: "mailto:contact@example.com",
        label: "contact@example.com",
        icon: mail_icon,
    },
    {
        title: "Phone",
        href: "tel:(123) 456-7890",
        label: "(123) 456-7890",
        icon: phone_icon,
    },
    {
        title: "Linkedin",
        href: "https://www.linkedin.com",
        label: "www.linkedin.com",
        icon: linkedin_icon,
    },
] as const;
