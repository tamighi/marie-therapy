import { useState } from "react";
import { Loader } from "./Loader";
import { twMerge } from "tailwind-merge";

type Props = {
    src: string;
    className?: string;
};

export const LazyImage = ({ src, className = "" }: Props) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div
            className={twMerge(
                "h-full w-full flex items-center justify-center",
                className,
            )}
        >
            <img
                className={`${loaded ? "block" : "hidden"}`}
                src={src}
                onLoad={() => setLoaded(true)}
            />
            {loaded ? null : <Loader />}
        </div>
    );
};
