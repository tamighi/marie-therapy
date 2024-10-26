import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

import { NavItem } from "./Appbar";
import { menu } from "../../assets";

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
            <button onClick={() => setIsOpen(true)} className="p-2">
                <img src={menu} />
            </button>

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
                            <button
                                key={item.to}
                                onClick={() => onNavClick(item.to)}
                                className="px-3 py-2 rounded-md text-base font-medium"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
