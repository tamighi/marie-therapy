import { BaseButton, BaseButtonProps } from "./BaseButton";

type Props = BaseButtonProps;

export const Button = (props: Props) => {
    return (
        <BaseButton
            className="bg-secondary hover:bg-opacity-70 hover:bg-secondary"
            {...props}
        />
    );
};
