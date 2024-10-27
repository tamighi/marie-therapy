import { useNavigate } from "@tanstack/react-router";

import { MobileNavIcon } from "./MobileNavIcon";
import { BaseButton } from "../Buttons";

export type NavItem = {
    label: string;
    to: string;
};

const navItems: NavItem[] = [
    { label: "A propos", to: "/about" },
    { label: "Prix et modalités", to: "/modalities" },
    { label: "Contact", to: "/contact" },
];

export const AppBar = () => {
    const navigate = useNavigate();

    return (
        <nav className="static w-screen bg-primary drop-shadow-main">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-16 justify-between">
                    <div className="flex items-center">
                        <BaseButton
                            onClick={() => navigate({ to: "/" })}
                            className="text-xl font-bold"
                        >
                            Marie Somville
                        </BaseButton>
                    </div>

                    <div className="hidden items-center gap-4 md:flex">
                        {navItems.map((item) => (
                            <BaseButton
                                key={item.to}
                                onClick={() => navigate({ to: item.to })}
                                className="rounded-md p-3 text-base font-medium"
                            >
                                {item.label}
                            </BaseButton>
                        ))}
                    </div>

                    <MobileNavIcon navItems={navItems} />
                </div>
            </div>
        </nav>
    );
};
