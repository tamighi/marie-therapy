import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { menu_icon } from "../../assets";
import { links } from "../../constants";
import { Drawer } from "../Drawer";
import { Button } from "../Buttons";

export const MobileNavIcon = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const onNavClick = (to: string) => {
        setIsOpen(false);
        navigate({ to });
    };

    return (
        <div className="flex items-center md:hidden">
            <Button variant="text" onClick={() => setIsOpen(true)}>
                <img src={menu_icon} />
            </Button>
            <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="flex flex-col gap-4 px-2 items-center">
                    <div className="py-2">Menu</div>
                    <hr className="border-primary-text w-full" />
                    {links.map((item) => (
                        <Button
                            variant="text"
                            className="w-full"
                            key={item.to}
                            onClick={() => onNavClick(item.to)}
                        >
                            {item.label}
                        </Button>
                    ))}
                </div>
            </Drawer>
        </div>
    );
};
