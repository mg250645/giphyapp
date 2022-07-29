import { FC, useEffect, useState } from "react";
import { Box, View } from "native-base";
import { GifList } from "../organisims/GifList";
import { IGiphyData } from "../types";
import { useAPI } from "../hooks/useAPI";
import { HeaderButtons } from "../molecules/HeaderButtons";

export const Trends: FC = () => {
    const [trends, setTrends] = useState<IGiphyData>({ data: []})
    const { getTrending } = useAPI()

    useEffect(() => {
        const getTrendsList = async () => {
            const trendingItems = await getTrending()

            setTrends(trendingItems)
        }

        getTrendsList()
    }, [])

    return (
        <View>
            <Box pt={72}>
                <HeaderButtons />
            </Box>
            <Box>
                <GifList gifs={trends} title="Trends" />
            </Box>
        </View>
    )
}