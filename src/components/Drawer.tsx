import { useDelayedClose } from "../hooks/useDelayedClose";
import { Backdrop } from "./Backdrop";

type Props = {
    open: boolean;
    onClose: () => void;
    children?: React.ReactNode;
};

export const Drawer = ({ open, onClose, children }: Props) => {
    const delayedClose = useDelayedClose(open, 300);

    return (
        <>
            <div
                className={`top-0 bottom-0 left-0 fixed z-50 bg-primary py-2
                    transition-transform duration-300
                    ${delayedClose ? "invisible" : ""}
                    ${open ? "" : "-translate-x-full"} `}
            >
                {children}
            </div>
            <Backdrop onClick={onClose} displayed={open} />
        </>
    );
};
