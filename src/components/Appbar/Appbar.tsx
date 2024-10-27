import { useNavigate } from "@tanstack/react-router";

import { MobileNavIcon } from "./MobileNavIcon";
import { BaseButton } from "../Buttons";
import { links } from "../../constants";

export const AppBar = () => {
    const navigate = useNavigate();

    return (
        <nav className="fixed z-50 h-16 w-screen bg-primary drop-shadow-main">
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
                        {links.map((item) => (
                            <BaseButton
                                key={item.to}
                                onClick={() => navigate({ to: item.to })}
                                className="rounded-md p-3 text-base font-medium"
                            >
                                {item.label}
                            </BaseButton>
                        ))}
                    </div>

                    <MobileNavIcon />
                </div>
            </div>
        </nav>
    );
};
