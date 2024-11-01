import { home_icon, map_pin_icon, monitor_icon } from "../assets";

export type Modality = {
    title: string;
    content: string;
    icon: string;
};

export const modalities: Modality[] = [
    {
        title: "Domicile",
        content: "Je viens vous voir chez vous",
        icon: home_icon,
    },
    {
        title: "Cabinets",
        content: "Je vous accueille dans un de mes cabinets",
        icon: map_pin_icon,
    },
    {
        title: "Vidéo conférences",
        content: "Nous faisons notre rendez vous sur Skype",
        icon: monitor_icon,
    },
] as const;
