import { FC } from "react";
import { Box } from "native-base";
import { InputButton } from "../molecules/InputButton";
import { useUIContext } from "../context/ui";
import { useAppContext } from "../context/data";

export const Search: FC = () => {
    const { setPage } = useUIContext()
    const { setSearchTerm } = useAppContext()

    const onPress = (text: string) => {
        setSearchTerm(text)
        setPage('list')
    }

    return (
        <Box>
            <InputButton label="Search for your favorite GIFs!" onPress={onPress} />
        </Box>
    )
}