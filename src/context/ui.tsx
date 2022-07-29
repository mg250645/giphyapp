import { createContext, FC, useContext, useState } from "react";
import { IUIProvider } from "../types"

const UIContext = createContext<IUIProvider>(null)

export const useUIContext = () => useContext<IUIProvider>(UIContext)

export const UIProvider: FC = ({ children }) => {
    const [page, setPage] = useState<string>('search')

    return (
        <UIContext.Provider value={{page, setPage}}>
            {children}
        </UIContext.Provider>
    )
}