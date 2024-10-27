import { getRouterContext, Outlet } from "@tanstack/react-router";
import { motion, useIsPresent } from "framer-motion";
import { cloneDeep } from "lodash";
import { forwardRef, useContext, useRef } from "react";

const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

export const AnimatedOutlet = forwardRef<HTMLDivElement>((_, ref) => {
    const RouterContext = getRouterContext();

    const routerContext = useContext(RouterContext);

    const renderedContext = useRef(routerContext);

    const isPresent = useIsPresent();

    if (isPresent) {
        renderedContext.current = cloneDeep(routerContext);
    }

    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            onAnimationComplete={() => window.scrollTo({ top: 0 })}
            transition={{ duration: 0.3 }}
            ref={ref}
            className="w-full"
        >
            <RouterContext.Provider value={renderedContext.current}>
                <Outlet />
            </RouterContext.Provider>
        </motion.div>
    );
});
