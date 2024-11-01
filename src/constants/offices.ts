import { cabinet_image } from "../assets";

export type Office = {
    title: string;
    address: string;
    schedule: string;
    website: string;
    img: string;
};

export const offices: Office[] = [
    {
        title: "Etterbeek",
        address: "Rue du Val des Seigneurs, 48, 2010, Etterbeek",
        schedule: "Le lundi et le mardi entre 10h et 18h",
        website: "https://www.google.com",
        img: cabinet_image,
    },
    {
        title: "Ixelles",
        address: "Avenue Louise, 1050, Ixelles",
        schedule: "Le mercredi et le jeudi de 9h à 17h",
        website: "https://www.bing.com",
        img: cabinet_image,
    },
    {
        title: "Saint-Gilles",
        address: "Chaussée de Charleroi, 40, 1060, Saint-Gilles",
        schedule: "Le vendredi de 8h à 16h",
        website: "https://www.yahoo.com",
        img: cabinet_image,
    },
];
