import React from "react";


const ShoppingCartContext = React.createContext({shoppingCartItems: [{ name: "", img: "", price: 0, quantity: 0}], setShoppingCartItems: (item: any) => {}});

export const ShoppingCartProvider = ShoppingCartContext.Provider;
export const ShoppingCartConsumer = ShoppingCartContext.Consumer;

export default ShoppingCartContext;