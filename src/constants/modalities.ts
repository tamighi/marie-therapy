import { homeIcon, mapPinIcon, monitorIcon } from "../assets";

export type Modality = {
    title: string;
    content: string;
    icon: string;
};

export const modalities: Modality[] = [
    {
        title: "Domicile",
        content: "Je viens vous voir chez vous",
        icon: homeIcon,
    },
    {
        title: "Cabinets",
        content: "Je vous accueille dans un de mes cabinets",
        icon: mapPinIcon,
    },
    {
        title: "Vidéo conférences",
        content: "Nous faisons notre rendez vous sur Skype",
        icon: monitorIcon,
    },
] as const;
