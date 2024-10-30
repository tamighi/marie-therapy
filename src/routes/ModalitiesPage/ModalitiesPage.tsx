import { Fieldset } from "../../components";
import { informations, modalities } from "../../constants";
import { BasePage } from "../BasePage";
import { InformationCard } from "./InformationCard";
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
            <Fieldset label="Informations utiles" />
            <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-8">
                {informations.map((information) => (
                    <InformationCard key={information.title} {...information} />
                ))}
            </div>
        </BasePage>
    );
};
