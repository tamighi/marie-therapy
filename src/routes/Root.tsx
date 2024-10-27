import { Outlet } from "@tanstack/react-router";
import { AppBar, Footer } from "../components";

export const Root = () => {
    return (
        <div className="min-h-screen flex flex-col bg-primary-bg">
            <AppBar />
            <div className="flex-1 flex max-w-7xl mx-auto">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};
