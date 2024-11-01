import { Card, Fieldset } from "../../components";
import { offices } from "../../constants";
import { BasePage } from "../BasePage";
import { OfficeCard } from "./OfficeCard";

export const ContactPage = () => {
    return (
        <BasePage
            className="flex md:flex-row flex-col gap-16 items-center
                justify-between"
        >
            <div className="flex flex-col items-center gap-4">
                <Fieldset label="Mes cabinets" className="mb-4" />
                {offices.map((office, i) => (
                    <OfficeCard key={i} {...office} />
                ))}
            </div>
            <Card>Contacts</Card>
        </BasePage>
    );
};
