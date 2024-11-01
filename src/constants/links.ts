export type Link = {
    label: string;
    to: string;
};

export const links: Link[] = [
    { label: "A propos", to: "/about" },
    { label: "Prix et modalités", to: "/modalities" },
    { label: "Contact et cabinets", to: "/contact" },
] as const;
