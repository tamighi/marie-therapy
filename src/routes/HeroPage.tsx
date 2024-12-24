import { useNavigate } from "@tanstack/react-router";
import { Button } from "../components";
import { BasePage } from "./BasePage";
import { HeroImage } from "../assets";

export const HeroPage = () => {
    const navigate = useNavigate();

    return (
        <BasePage
            className="flex h-full items-center justify-center
                md:justify-between md:flex-row flex-col md:pb-[160px]
                md:gap-[120px]"
        >
            <div
                className="flex flex-col text-center gap-8 md:text-left
                    items-center md:items-start leading-tight"
            >
                <div>
                    <h1 className="font-bold">Marie Somville</h1>
                    <h2>Psychologue clinicienne</h2>
                </div>
                <span className="italic">
                    Mon chat c'est le plus beau, celui qui dira le contraire, je
                    lui ferai sa fête ... - iconnue
                </span>
                <Button onClick={() => navigate({ to: "/about" })}>
                    En savoir plus
                </Button>
            </div>
            <HeroImage className="flex-1 md:min-w-[600px] max-w-full" />
        </BasePage>
    );
};
