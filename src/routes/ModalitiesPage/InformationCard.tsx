import { Card } from "../../components";
import { Information } from "../../constants";

type Props = Information;

export const InformationCard = ({ title, content }: Props) => {
    return (
        <Card className="flex flex-col gap-8">
            <h3 className="font-bold">{title}</h3>
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
        </Card>
    );
};
