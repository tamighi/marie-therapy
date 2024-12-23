import { useState } from "react";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { links } from "../../constants";
import { Drawer } from "../Drawer";
import { Button } from "../Buttons";
import { CloseIcon, MenuIcon } from "../../assets";

export const MobileNavIcon = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const onNavClick = (to: string) => {
        setIsOpen(false);
        navigate({ to });
    };

    return (
        <div className="flex items-center md:hidden">
            <Button variant="text" onClick={() => setIsOpen(true)}>
                <MenuIcon />
            </Button>
            <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="flex flex-col gap-4 px-2">
                    <div className="pl-4 justify-between items-center flex">
                        <div>Menu</div>
                        <Button variant="text" onClick={() => setIsOpen(false)}>
                            <CloseIcon />
                        </Button>
                    </div>
                    <hr className="border-primary-text w-full" />
                    {links.map((item) => (
                        <Button
                            variant="text"
                            className={
                                "w-full text-left " +
                                (pathname === import.meta.env.BASE_URL + item.to
                                    ? "font-bold"
                                    : "")
                            }
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
