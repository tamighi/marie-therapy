import { Outlet } from "@tanstack/react-router";
import { AppBar, Footer } from "../components";

export const Root = () => {
    return (
        <div className="bg-primary-bg">
            <AppBar />
            <div className="min-h-screen flex flex-col">
                <div
                    className="flex-1 flex mt-16 w-7xl mx-auto px-4 py-4 md:py-0"
                >
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};
