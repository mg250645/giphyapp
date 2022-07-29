import { FC } from "react";
import { Box, View } from "native-base";
import { GifList } from "../organisims/GifList";
import { InputButton } from "../molecules/InputButton";
import { HeaderButtons } from "../molecules/HeaderButtons";
import { useAppContext } from "../context/data";

export const List: FC = () => {
    const { giphyList, setSearchTerm } = useAppContext()

    const onPress = (text: string) => {
        setSearchTerm(text)
    }

    return (
        <View>
            <Box pt={72}>
                <HeaderButtons />
            </Box>
            <Box>
                <InputButton label="Search for your favorite GIFs!" onPress={onPress} />
            </Box>
            <Box>
                {giphyList && <GifList gifs={giphyList} title="List"/>}
            </Box>
        </View>
    )
}