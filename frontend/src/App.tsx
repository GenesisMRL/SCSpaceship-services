import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";
import { ProductsProvider, productsData } from "./contexts/ProductsContext.js";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";

function App() {
  const [shoppingCartItems, setShoppingCartItems] = useState([]);
  
  useEffect(() => {
    const cartRecovery = localStorage.getItem("shoppingCart");
    if ( cartRecovery != null){
      setShoppingCartItems(JSON.parse(cartRecovery));
    }
  }, [])
  
  return (
    <div>
      <ProductsProvider value={productsData}>
        <ShoppingCartProvider
          value={{ shoppingCartItems, setShoppingCartItems }}
        >
          <Header />
          <Outlet />
        </ShoppingCartProvider>
      </ProductsProvider>
    </div>
  );
}

export default App;
