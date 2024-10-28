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
                {links.map((item) => (
                    <BaseButton
                        key={item.to}
                        onClick={() => onNavClick(item.to)}
                    >
                        {item.label}
                    </BaseButton>
                ))}
            </Drawer>
        </div>
    );
};
