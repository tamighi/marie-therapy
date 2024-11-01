import { useNavigate } from "@tanstack/react-router";
import { contacts, links } from "../../constants";
import { BaseButton } from "../Buttons";
import { ContactItem } from "../ContactItem";

export const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="bg-primary md:mt-0 mt-10">
            <div className="max-w-7xl mx-auto gap-8 flex flex-col p-4">
                <div className="flex flex-col md:flex-row justify-around gap-8">
                    <div className="flex flex-col items-start">
                        <h3 className="font-bold mb-4 mx-2">Liens du site</h3>
                        {links.map((link) => (
                            <BaseButton
                                key={link.label}
                                onClick={() => navigate({ to: link.to })}
                                className="py-1 px-2"
                            >
                                {link.label}
                            </BaseButton>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-bold mb-4 px-2">
                            Informations de contact
                        </h3>
                        <div className="flex flex-col gap-2">
                            {contacts.map((contact, i) => (
                                <ContactItem
                                    key={i}
                                    withIcon={false}
                                    className="px-2"
                                    {...contact}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <span className="italic">
                        © {new Date().getFullYear()} Amighi Thomas. All rights
                        reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};
