import { Card, LazyImage } from "../../components";
import { Office } from "../../constants";

type Props = Office;

export const OfficeCard = ({ img, website, address, title }: Props) => {
    return (
        <Card className="flex gap-8">
            <div className="flex-flex-col gap-8">
                <h3 className="font-bold">{title}</h3>
                <div className="flex flex-col gap-4">
                    <span>Addresse: {address}</span>
                    <span>
                        Site web: <a href={website}>{website}</a>
                    </span>
                </div>
            </div>
            <LazyImage src={img} className="w-[248px] h-[174px]" />
        </Card>
    );
};
