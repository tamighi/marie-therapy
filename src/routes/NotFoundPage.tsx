import { not_found_image } from "../assets";
import { LazyImage } from "../components";
import { BasePage } from "./BasePage";

export const NotFoundPage = () => {
    return (
        <BasePage className="h-full">
            <div
                className="flex gap-32 flex-col w-full items-center
                    justify-center mt-32"
            >
                <LazyImage className="w-80" src={not_found_image} />
                <h3 className="italic">Il n'y a rien ici ...</h3>
            </div>
        </BasePage>
    );
};
