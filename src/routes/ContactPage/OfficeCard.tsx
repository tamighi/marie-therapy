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
    schedule,
    imagePosition = "right",
}: Props) => {
    const flexDirection = imagePosition === "right" ? "row" : "row-reverse";
    return (
        <Card
            className={`flex md:flex-${flexDirection} flex-col md:items-start
                items-center gap-8 w-full justify-end`}
        >
            <div className="flex flex-col gap-8">
                <h3 className="font-bold">{title}</h3>
                <div className="flex flex-col gap-4">
                    <span>
                        <span className="font-bold">Addresse</span>:&nbsp;
                        {address}
                    </span>
                    <span>
                        <span className="font-bold">Horaires</span>:&nbsp;
                        {schedule}
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
