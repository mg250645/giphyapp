import { FC } from "react";
import { Center } from "native-base";
import { Button } from "../atoms/Button";
import { useUIContext } from "../context/ui";

export const HeaderButtons: FC = () => {
    const { setPage } = useUIContext()

    const onPress = (text: string) => {
        setPage(text)
    }

    return (
        <Center flexDirection="row">
            <Button onPress={() => onPress('list')}>Search</Button>
            <Button onPress={() => onPress('trends')}>Trends</Button>
        </Center>
    )
}