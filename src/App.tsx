import { Route, Routes } from "react-router-dom";
import "./App.css";
import React,{ ReactElement, Suspense } from "react";
import { AppProviders } from "./providers";
import { Catetgory } from "./pages/Category/Category.page";
import Applayout from "./components/applayout/Applayout.component";
import Products from "./pages/product/Products.page";
import CreateBrand from "./pages/brand/CreateBrand.page";
import CreateProduct from "./pages/product/CreateProduct.page";
import CreateCategory from "./pages/Category/CreateCategory.page";



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
    <Route path="/createbrand" element={<CreateBrand />} />
    <Route path="/createcategory" element={<CreateCategory />} />
    <Route path="/createproduct" element={<CreateProduct />} />
  </Routes>
  </Suspense>
  </Applayout>
  </AppProviders>
  )
}

export default App;
