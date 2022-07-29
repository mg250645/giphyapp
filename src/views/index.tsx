import { FC } from "react";
import { View, Text } from "native-base";
import { GifList } from "../organisims/GifList";
import { InputButton } from "../molecules/InputButton";
import { useUIContext } from "../context/ui";
import { Search } from "./Search";
import { List } from "./List";
import { Trends } from "./Trends";

export const Main: FC = () => {
    const { page } = useUIContext()

    const renderPage = () => {
        switch(page) {
            case 'list':
                return <List />
            case 'trends':
                return <Trends />
            case 'search':
            default:
                return <Search />
        }
    }

    return (
        <View>
            {renderPage()}
        </View>
    )
}