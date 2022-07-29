
import { FC } from "react";
import { View, Text } from "native-base";
import { Image } from "../atoms/Image";
import { Datum } from "../types";

interface Props {
    item: Datum
}

export const GifListItem: FC<Props> = ({ item }) => (
    <View>
        <Image source={{ uri: item.images.fixed_height_small.url}} variant="small" />
        <Text>{item.title}</Text>
    </View>
)