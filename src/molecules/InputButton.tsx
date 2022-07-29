import { FC, useState } from "react";
import { View, Text } from "native-base";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";

interface IInputButton {
    label?: string
    placeholder?: string
    onPress: (text: string) => void
}

export const InputButton: FC<IInputButton> = ({
    label,
    placeholder = 'Search',
    onPress
}) => {
    const [input, setInput] = useState('')

    return (
        <View alignItems="center">
            { label && <Text>{label}</Text>}
            <Input placeholder={placeholder} value={input} onChangeText={text => setInput(text)}/>
            <Button onPress={() => onPress(input)}>Search</Button>
        </View>
    )
}