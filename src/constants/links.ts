export type Link = {
    label: string;
    to: string;
};

export const links: Link[] = [
    { label: "A propos", to: "/about" },
    { label: "Infos pratiques", to: "/modalities" },
    { label: "Contact", to: "/contact" },
] as const;
