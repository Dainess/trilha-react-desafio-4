export interface IButtonProps {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled: boolean;
}

export interface IButtonContainerProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
}