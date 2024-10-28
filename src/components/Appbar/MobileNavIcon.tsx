import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { menu } from "../../assets";
import { BaseButton } from "../Buttons";
import { links } from "../../constants";
import { Drawer } from "../Drawer";

export const MobileNavIcon = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const onNavClick = (to: string) => {
        setIsOpen(false);
        navigate({ to });
    };

    return (
        <div className="flex items-center md:hidden">
            <BaseButton onClick={() => setIsOpen(true)}>
                <img src={menu} />
            </BaseButton>
            <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="flex flex-col gap-4 px-2 items-center">
                    <div className="py-2">Menu</div>
                    <hr className="border-on-primary w-full" />
                    {links.map((item) => (
                        <BaseButton
                            className="w-full"
                            key={item.to}
                            onClick={() => onNavClick(item.to)}
                        >
                            {item.label}
                        </BaseButton>
                    ))}
                </div>
            </Drawer>
        </div>
    );
};
