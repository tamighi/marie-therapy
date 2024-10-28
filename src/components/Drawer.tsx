type Props = {
    open: boolean;
    onClose: () => void;
    children?: React.ReactNode;
};

export const Drawer = ({ open, onClose, children }: Props) => {
    return (
        <div
            className={`fixed left-0 top-0 h-screen w-screen bg-black
                transition-opacity duration-300 ${
                open
                        ? "pointer-events-auto bg-opacity-20"
                        : "pointer-events-none bg-opacity-0"
                }`}
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`flex h-screen w-fit flex-col gap-4 bg-primary py-2
                    transition-transform duration-300 ease-out md:hidden ${
                    open ? "translate-x-0" : "-translate-x-full" }`}
            >
                {children}
            </div>
        </div>
    );
};
