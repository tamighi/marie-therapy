import { useMatch, useMatches } from "@tanstack/react-router";
import { AppBar, Footer } from "../components";
import { AnimatePresence } from "framer-motion";
import { AnimatedOutlet } from "../components";

export const Root = () => {
    const matches = useMatches();
    const match = useMatch({ strict: false });
    const nextMatchIndex = matches.findIndex((d) => d.id === match.id) + 1;
    const nextMatch = matches[nextMatchIndex];

    return (
        <div className="bg-primary-bg">
            <AppBar />
            <div className="min-h-screen flex flex-col">
                <div className="flex flex-1 px-4 py-4 md:py-0 mt-16">
                    <AnimatePresence mode="wait">
                        <AnimatedOutlet key={nextMatch?.id} />
                    </AnimatePresence>
                </div>
            </div>
            <Footer />
        </div>
    );
};
