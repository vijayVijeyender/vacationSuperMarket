import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";


export function RouterProvider({ children }: PropsWithChildren){
    return <BrowserRouter basename={import.meta.env['VITE_PUBLIC_URL']}>{children}</BrowserRouter>
}