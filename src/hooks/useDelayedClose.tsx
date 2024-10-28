import { useEffect, useState } from "react";

export const useDelayedClose = (open: boolean, delay: number) => {
    const [delayedClose, setDelayedClose] = useState(open);

    useEffect(() => {
        if (open) {
            setDelayedClose(!open);
        }
        const timer = setTimeout(() => {
            if (!open) {
                setDelayedClose(!open);
            }
        }, delay);
        return () => clearTimeout(timer);
    }, [open, delay]);
    return delayedClose;
};
