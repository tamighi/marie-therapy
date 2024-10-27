import { useNavigate } from "@tanstack/react-router";
import { hero_image } from "../assets";
import { Button } from "../components";
import { BasePage } from "./BasePage";

export const Hero = () => {
    const navigate = useNavigate();

    return (
        <BasePage
            className="flex h-full max-w-8xl items-center justify-center
                md:justify-between md:flex-row flex-col md:pb-[160px]"
        >
            <div
                className="flex flex-col gap-4 text-center md:text-left
                    items-center md:items-start"
            >
                <h1 className="font-bold">Marie Somville</h1>
                <h2>Psychologue clinicienne</h2>
                <span className="italic">
                    Mon chat c'est le plus beau, celui qui dira le contraire, je
                    lui ferai sa fete ... - iconnue
                </span>
                <Button onClick={() => navigate({ to: "/about" })}>
                    En savoir plus
                </Button>
            </div>
            <div>
                <img src={hero_image} />
            </div>
        </BasePage>
    );
};
