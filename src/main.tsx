import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
    createRootRoute,
    createRoute,
    createRouter,
    RouterProvider,
} from "@tanstack/react-router";

import "./index.css";

import {
    AboutPage,
    ContactPage,
    HeroPage,
    ModalitiesPage,
    NotFoundPage,
} from "./routes";
import { Root } from "./routes/Root.tsx";
import { cabinet_image, marie_portrait } from "./assets/index.ts";

const routeRoute = createRootRoute({
    component: Root,
    notFoundComponent: NotFoundPage,
});

const heroRoute = createRoute({
    path: "/",
    component: HeroPage,
    getParentRoute: () => routeRoute,
});
const aboutRoute = createRoute({
    path: "/about",
    component: AboutPage,
    getParentRoute: () => routeRoute,
});
const contactRoute = createRoute({
    path: "/contact",
    component: ContactPage,
    getParentRoute: () => routeRoute,
});
const modalitiesRoute = createRoute({
    path: "/modalities",
    component: ModalitiesPage,
    getParentRoute: () => routeRoute,
});

const routeTree = routeRoute.addChildren([
    heroRoute,
    aboutRoute,
    contactRoute,
    modalitiesRoute,
]);

const router = createRouter({ routeTree, basepath: import.meta.env.BASE_URL });

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

const imagesToPreload = [marie_portrait, cabinet_image];
imagesToPreload.forEach((image) => (new Image().src = image));
