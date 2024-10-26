import { Outlet } from "@tanstack/react-router";
import { AppBar } from "../components";

export const Root = () => {
    return (
        <>
            <AppBar />
            <Outlet />
        </>
    );
};
