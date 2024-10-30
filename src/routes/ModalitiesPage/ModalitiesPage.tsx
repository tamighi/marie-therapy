import { Fieldset } from "../../components";
import { modalities } from "../../constants";
import { BasePage } from "../BasePage";
import { ModalityCard } from "./ModalityCard";

export const ModalitiesPage = () => {
    return (
        <BasePage className="flex flex-col gap-16 items-center">
            <Fieldset label="Modalités" />
            <div className="flex gap-8 flex-wrap">
                {modalities.map((modality) => (
                    <div className="flex-1" key={modality.title}>
                        <ModalityCard {...modality} />
                    </div>
                ))}
            </div>
            <Fieldset label="FAQ" />
        </BasePage>
    );
};
