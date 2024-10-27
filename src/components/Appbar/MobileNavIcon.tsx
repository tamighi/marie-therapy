import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { NavItem } from "./Appbar";
import { menu } from "../../assets";
import { BaseButton } from "../Buttons";

type MobileNavIconProps = {
    navItems: NavItem[];
};

export const MobileNavIcon = (props: MobileNavIconProps) => {
    const { navItems } = props;
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const onNavClick = (to: string) => {
        setIsOpen(false);
        navigate({ to });
    };

    return (
        <div className="md:hidden flex items-center">
            <BaseButton onClick={() => setIsOpen(true)}>
                <img src={menu} />
            </BaseButton>
            <div
                className={`fixed h-screen w-screen bg-black transition-opacity duration-300 top-0 left-0 ${
                    isOpen
                        ? "bg-opacity-20 pointer-events-auto"
                        : "bg-opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsOpen(false)}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={`md:hidden flex flex-col gap-4 h-screen bg-primary py-2 w-fit transition-transform duration-300 ease-out ${
                        isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    {navItems.map((item) => (
                        <BaseButton
                            key={item.to}
                            onClick={() => onNavClick(item.to)}
                        >
                            {item.label}
                        </BaseButton>
                    ))}
                </div>
            </div>
        </div>
    );
};
