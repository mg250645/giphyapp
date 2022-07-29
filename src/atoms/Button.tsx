import { FC } from "react";
import { Button as NativeButton, IButtonProps } from "native-base";

export const Button: FC<IButtonProps> = ({ children, ...props}) => (
    <NativeButton {...props}>{children}</NativeButton>
)