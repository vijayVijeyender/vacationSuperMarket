import { StoreProvider as EasyPeasyStoreProvider } from "easy-peasy";
import { PropsWithChildren } from "react";
import { store } from "../store/index";


export default function GlobalStoreProvider({children}:PropsWithChildren<{}>){
    return <EasyPeasyStoreProvider store={store}>{children}</EasyPeasyStoreProvider>
}