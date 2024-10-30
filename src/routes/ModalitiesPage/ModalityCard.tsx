import { Card } from "../../components";
import { Modality } from "../../constants";

type Props = Modality;

export const ModalityCard = ({ title, content, icon }: Props) => {
    return (
        <Card className="flex flex-col gap-8 h-full">
            <div className="flex gap-8 justify-between items-center">
                <h3>{title}</h3>
                <img className="w-6 h-6" src={icon} />
            </div>
            <p>{content}</p>
        </Card>
    );
};
