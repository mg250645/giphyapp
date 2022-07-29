import { createContext, FC, useContext, useEffect, useState } from "react";
import { useAPI } from "../hooks/useAPI";
import { IAppProvider, IGiphyData } from "../types"

const initContext = {
  giphyList: null,
  searchTerm: null,
  setSearchTerm: () => null
}

const AppContext = createContext<IAppProvider>(initContext)

export const useAppContext = () => useContext(AppContext)

export const AppProvider: FC = ({ children }) => {
    const { getList } = useAPI()
    const [giphyList, setGiphyList] = useState<IGiphyData>({ data: []})
    const [searchTerm, setSearchTerm] = useState<string>('')

    useEffect(() => {
        const setList = async () => {
            const list: IGiphyData = await getList(searchTerm)
            
            setGiphyList(list)
        }

        setList()
    }, [searchTerm])

    return (
        <AppContext.Provider value={{ giphyList, setSearchTerm, searchTerm }}>
            {children}
        </AppContext.Provider>
    )
}