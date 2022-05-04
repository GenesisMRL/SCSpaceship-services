import React, { useContext, useEffect, useState } from "react";
import {
  ModalContainer,
  ModalHr,
  CartItems,
  ModalBackground,
  ModalHeader,
  ModalTitle,
  ModalButton,
  SingleItemDiv,
  ProductImg,
  ProductName,
  ProductQuantity,
  ProductPrice,
  ProductImgDiv,
  ModalDiv,
  ModalButtonsDiv,
  ModalButton2,
  QuantityDiv,
  QuantityButtonsDiv,
  QuantityButton,
} from "./shopping-cart-styles";
import ShoppingCartContext from "../../contexts/ShoppingCartContext";
import getCookie from "../../utils";

const ShoppingCart = ({ showCart, toggleHidden }: any) => {
  const cart = useContext(ShoppingCartContext);

  useEffect(() => {
  }, [cart.shoppingCartItems]);

  const addOneMoreItem = (item: any) => {
    let itemsList: any = [];

    cart.shoppingCartItems.map((el: any) => {
      if (el.name === item.name) {
        itemsList.push({
          name: el.name,
          img: el.img,
          price: el.price,
          quantity: el.quantity + 1,
        });
      } else {
        itemsList.push({
          name: el.name,
          img: el.img,
          price: el.price,
          quantity: el.quantity,
        });
      }
    });
    cart.setShoppingCartItems(itemsList);
    localStorage.setItem(
      "shoppingCart",
      JSON.stringify(cart.shoppingCartItems)
    );
  };

  const removeItemFromCart = (item: any) => {
    let itemsList: any = [];

    cart.shoppingCartItems.map((el: any) => {
      if (el.name === item.name) {
        if (el.quantity > 1) {
          itemsList.push({
            name: el.name,
            img: el.img,
            price: el.price,
            quantity: el.quantity - 1,
          });
        } else {
          return;
        }
      } else {
        itemsList.push({
          name: el.name,
          img: el.img,
          price: el.price,
          quantity: el.quantity,
        });
      }
    });
    cart.setShoppingCartItems(itemsList);
    localStorage.setItem(
      "shoppingCart",
      JSON.stringify(cart.shoppingCartItems)
    );
  };

  const getTotalPrice = () => {
    let total = 0;
    cart.shoppingCartItems.map((item: any) => {
      total = total + item.price * item.quantity;
    });
    return Math.round((total + Number.EPSILON) * 100) / 100;
  };

  return (
    <ModalBackground showCart={showCart}>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>CART</ModalTitle>
          <ModalButton onClick={toggleHidden}>X</ModalButton>
        </ModalHeader>
        <ModalHr />
        <CartItems>
          {cart.shoppingCartItems.map((item: any) => {
            return (
              <SingleItemDiv key={item.name}>
                <ProductImgDiv>
                  <ProductImg src={item.img} />
                </ProductImgDiv>
                <ProductName>{item.name}</ProductName>
                <QuantityDiv>
                  <ProductQuantity>quantity: {item.quantity}</ProductQuantity>
                  <QuantityButtonsDiv>
                    <QuantityButton
                      onClick={() => {
                       addOneMoreItem(item);
                      }}
                    >
                      +
                    </QuantityButton>
                    <QuantityButton
                      onClick={() => {
                        removeItemFromCart(item);
                      }}
                    >
                      -
                    </QuantityButton>
                  </QuantityButtonsDiv>
                </QuantityDiv>
                <ProductPrice>price: {item.price}</ProductPrice>
              </SingleItemDiv>
            );
          })}
        </CartItems>
        <ModalDiv>
          <ModalTitle>total: {getTotalPrice()}</ModalTitle>
          <ModalButtonsDiv>
            <ModalButton2 onClick={() => cart.setShoppingCartItems([])}>
              CLEAR CART
            </ModalButton2>
            <ModalButton2 onClick={() => getCookie("loggedin") === "true" ? alert("An Employee is arranging a drop-off at your location. You will be contacted soon!") : alert("You need to Login first!!")}>CHECKOUT </ModalButton2>
          </ModalButtonsDiv>
        </ModalDiv>
      </ModalContainer>
    </ModalBackground>
  );
};

export default ShoppingCart;
