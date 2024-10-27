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

            {isOpen && (
                <div
                    className="fixed h-screen w-screen bg-black bg-opacity-20 top-0 left-0"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="md:hidden flex flex-col gap-4 h-screen bg-primary py-2 w-fit"
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
            )}
        </div>
    );
};
