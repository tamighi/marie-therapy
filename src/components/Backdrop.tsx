import { useDelayedClose } from "../hooks/useDelayedClose";

type Props = {
    displayed: boolean;
    onClick?: () => void;
};

export const Backdrop = ({ displayed, onClick }: Props) => {
    const delayedClosed = useDelayedClose(displayed, 300);

    return (
        <div
            className={`fixed inset-0 bg-black transition-opacity duration-300
                ${displayed ? "opacity-20" : "opacity-0"}
                ${delayedClosed ? "invisible" : ""}`}
            onClick={onClick}
        />
    );
};
