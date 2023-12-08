import { Route, Routes } from "react-router-dom";
import "./App.css";
import React,{ ReactElement, Suspense } from "react";
import { AppProviders } from "./providers";
import { Catetgory } from "./pages/Category/Category.page";
import Applayout from "./components/applayout/Applayout.component";
import Products from "./pages/product/Products.page";



const Bill =React.lazy(()=> import('./pages/bill/Bill.page'))

function App():ReactElement {
  return (
  <AppProviders>
    <Applayout>
  <Suspense>
  <Routes>
    <Route path="/billing" element={<Bill/>}/>
    <Route path="/category" element={<Catetgory />} />
    <Route path="/products" element={<Products />} />
  </Routes>
  </Suspense>
  </Applayout>
  </AppProviders>
  )
}

export default App;
