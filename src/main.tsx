import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
    createRootRoute,
    createRoute,
    createRouter,
    RouterProvider,
} from "@tanstack/react-router";

import { About, Contact, Hero, Modalities } from "./routes/index.ts";
import { Root } from "./routes/Root.tsx";

const routeRoute = createRootRoute({ component: Root });

const heroRoute = createRoute({
    path: "/",
    component: Hero,
    getParentRoute: () => routeRoute,
});
const aboutRoute = createRoute({
    path: "/about",
    component: About,
    getParentRoute: () => routeRoute,
});
const contactRoute = createRoute({
    path: "/contact",
    component: Contact,
    getParentRoute: () => routeRoute,
});
const modalitiesRoute = createRoute({
    path: "/modalities",
    component: Modalities,
    getParentRoute: () => routeRoute,
});

const routeTree = routeRoute.addChildren([
    heroRoute,
    aboutRoute,
    contactRoute,
    modalitiesRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
