import { Card } from "../../components";
import { Modality } from "../../constants";

type Props = Modality;

export const ModalityCard = ({ title, content, icon }: Props) => {
    return (
        <Card className="flex flex-col gap-8 h-full">
            <div className="flex gap-2 items-center">
                <img className="w-6 h-6 max-w-[initial]" src={icon} />
                <h3 className="font-bold">{title}</h3>
            </div>
            <p>{content}</p>
        </Card>
    );
};
