import { Card, Fieldset } from "../../components";
import { ContactItem } from "../../components/ContactItem";
import { contacts, offices } from "../../constants";
import { BasePage } from "../BasePage";
import { OfficeCard } from "./OfficeCard";

export const ContactPage = () => {
    return (
        <BasePage className="flex flex-col gap-16 items-center justify-between">
            <div className="flex flex-col items-center gap-8">
                <Fieldset label="Contact" className="mb-4" />

                <Card className="flex flex-col gap-4">
                    {contacts.map((contact, i) => (
                        <ContactItem key={i} {...contact} />
                    ))}
                </Card>
            </div>
            <div className="flex flex-col items-center gap-8">
                <Fieldset label="Mes cabinets" className="mb-4" />
                {offices.map((office, i) => (
                    <OfficeCard
                        key={i}
                        imagePosition={i % 2 === 0 ? "right" : "left"}
                        {...office}
                    />
                ))}
            </div>
        </BasePage>
    );
};
