import { NotFoundImage } from "../assets";
import { BasePage } from "./BasePage";

export const NotFoundPage = () => {
    return (
        <BasePage className="h-full">
            <div
                className="flex gap-32 flex-col w-full items-center
                    justify-center mt-32"
            >
                <NotFoundImage className="h-80" />
                <h3 className="italic">Il n'y a rien ici ...</h3>
            </div>
        </BasePage>
    );
};
