import { BaseButton, BaseButtonProps } from "./BaseButton";

type Props = BaseButtonProps;

export const Button = (props: Props) => {
    return <BaseButton className="bg-secondary" {...props} />;
};
