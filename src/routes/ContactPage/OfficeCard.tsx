import { Card, LazyImage } from "../../components";
import { Office } from "../../constants";

type Props = Office & {
    imagePosition?: "left" | "right";
};

export const OfficeCard = ({
    img,
    website,
    address,
    title,
    imagePosition = "right",
}: Props) => {
    const flexDirection = imagePosition === "right" ? "row" : "row-reverse";
    return (
        <Card className="flex gap-8" style={{ flexDirection }}>
            <div className="flex flex-col gap-8">
                <h3 className="font-bold">{title}</h3>
                <div className="flex flex-col gap-4">
                    <span>
                        <span className="font-bold">Addresse</span>:&nbsp;
                        {address}
                    </span>
                    <span>
                        <span className="font-bold">Site web</span>:&nbsp;
                        <a href={website}>{website}</a>
                    </span>
                </div>
            </div>
            <LazyImage src={img} className="w-[248px] h-[174px]" />
        </Card>
    );
};
