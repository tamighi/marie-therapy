import { Link } from "@tanstack/react-router";
import { MobileNavIcon } from "./MobileNavIcon";

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
    return (
        <nav className="bg-primary drop-shadow-main static w-screen">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-xl font-bold">
                            Marie Somville
                        </Link>
                    </div>

                    <div className="hidden gap-4 md:flex items-center">
                        {navItems.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                className="rounded-md p-3 text-base font-medium"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <MobileNavIcon navItems={navItems} />
                </div>
            </div>
        </nav>
    );
};
