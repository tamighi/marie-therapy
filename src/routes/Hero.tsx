import { useNavigate } from "@tanstack/react-router";
import { hero_image } from "../assets";
import { Button } from "../components";

export const Hero = () => {
    const navigate = useNavigate();
    return (
        <div
            className="flex h-full items-center justify-center md:flex-row
                flex-col"
        >
            <div
                className="flex flex-col gap-4 text-center md:text-left
                    items-center md:items-start"
            >
                <h1 className="font-bold">Marie Somville</h1>
                <h2>Psychologue clinicienne</h2>
                <span className="italic">
                    Mon chat c'est le plus beau, celui qui dira le contraire,
                    gare a lui ...
                    <br />- iconnue.
                </span>
                <Button onClick={() => navigate({ to: "/about" })}>
                    En savoir plus
                </Button>
            </div>
            <div>
                <img src={hero_image} />
            </div>
        </div>
    );
};
