import { FC } from "react";
import { Input as NativeInput, IInputProps } from "native-base";

export const Input: FC<IInputProps> = props => (
    <NativeInput {...props} />
)