import { useNavigate } from "@tanstack/react-router";

import { MobileNavIcon } from "./MobileNavIcon";
import { links } from "../../constants";
import { Button } from "../Buttons";

export const AppBar = () => {
    const navigate = useNavigate();

    return (
        <nav className="fixed z-10 h-16 w-screen bg-surface shadow-main">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-16 justify-between">
                    <div className="flex items-center">
                        <Button
                            variant="text"
                            onClick={() => navigate({ to: "/" })}
                            className="text-xl font-bold"
                        >
                            Marie Somville
                        </Button>
                    </div>

                    <div className="hidden items-center gap-4 md:flex">
                        {links.map((item) => (
                            <Button
                                variant="text"
                                key={item.to}
                                onClick={() => navigate({ to: item.to })}
                                className="rounded-md p-3 text-base font-medium"
                            >
                                {item.label}
                            </Button>
                        ))}
                    </div>

                    <MobileNavIcon />
                </div>
            </div>
        </nav>
    );
};
