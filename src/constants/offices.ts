import { cabinet_image } from "../assets";

export type Office = {
    title: string;
    address: string;
    website: string;
    img: string;
};

export const offices: Office[] = [
    {
        title: "Etterbeek",
        address: "Rue du val des seigneurs, 48, 2010, etterbeek",
        website: "https://www.google.com",
        img: cabinet_image,
    },
];
