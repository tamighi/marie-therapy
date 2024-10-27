import { Outlet } from "@tanstack/react-router";
import { AppBar, Footer } from "../components";

export const Root = () => {
    return (
        <div className="min-h-screen flex flex-col bg-primary-bg">
            <AppBar />
            <div className="flex-1 flex w-7xl mx-auto px-4 py-4 md:py-0">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};
