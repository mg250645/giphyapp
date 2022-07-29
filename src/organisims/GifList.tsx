import { FC } from "react";
import { View, Box, FlatList, Heading } from "native-base";
import { GifListItem } from "../molecules/GifListItem";
import { IGiphyData } from "../types";

interface IGifList {
    gifs: IGiphyData
    title: string
}

export const GifList: FC<IGifList> = ({ gifs, title }) => {
    return (
        <View pt={6}>
                <Heading>{title}</Heading>
            <Box>
                <FlatList 
                    data={gifs.data}
                    renderItem={GifListItem}
                    keyExtractor={ item => item.id } />
            </Box>
        </View>
    )
}