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
        <div className="flex items-center md:hidden">
            <BaseButton onClick={() => setIsOpen(true)}>
                <img src={menu} />
            </BaseButton>
            <div
                className={`fixed left-0 top-0 h-screen w-screen bg-black
                    transition-opacity duration-300 ${
                    isOpen
                            ? "pointer-events-auto bg-opacity-20"
                            : "pointer-events-none bg-opacity-0"
                    }`}
                onClick={() => setIsOpen(false)}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={`flex h-screen w-fit flex-col gap-4 bg-primary
                        py-2 transition-transform duration-300 ease-out
                        md:hidden ${
                        isOpen ? "translate-x-0" : "-translate-x-full" }`}
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
