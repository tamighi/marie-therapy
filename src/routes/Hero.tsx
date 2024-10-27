import { hero_image } from "../assets";

export const Hero = () => {
    return (
        <div className="flex items-center">
            <div className="flex flex-col">
                <h1 className="font-bold">Marie Somville</h1>
                <h2>Psychologue clinicienne</h2>
                <span>
                    Mon chat c'est le plus beau, celui qui dira le contraire,
                    gare a lui ... - iconnue.
                </span>
            </div>
            <div>
                <img src={hero_image} />
            </div>
        </div>
    );
};
