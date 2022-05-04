import React, { useContext, useState, useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductsContext from "../../contexts/ProductsContext.js";
import ShoppingCartContext from "../../contexts/ShoppingCartContext";
import { BCAnchor, BCP, BreadCrumb } from "../global-styles";
import {
  PDPBody,
  ShipDetailsDiv,
  ProductGalleryDiv,
  SelectedPhotoDiv,
  SelectedPhoto,
  OtherPhotosDiv,
  ShipDescriptionDiv,
  ShipPrice,
  ShipDescription,
  CartButtonDiv,
  AddToCartButton,
  OtherPhotos,
  PDPName,
  ShipDetail,
  ShipStats,
} from "./pdp-styles";

const PDP = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const prodContext = useContext(ProductsContext);
  const shoppingCartContext = useContext(ShoppingCartContext);
  const [selectedImg, setSelectedImg] = useState(0);
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    available: 0,
    img: [],
    category: {
      "0": "",
      "1": "",
      "2": "",
    },
    manufacturer: "",
    manufacturerPathParam: "",
    length: "",
    height: "",
    mass: "",
    maxCrew: 0,
  });

  useLayoutEffect(() => {
    if (productId) {
      setProduct(prodContext.getProductById(productId));
    }
  }, [productId]);

  const addToCart = () => {

    let itemsList = shoppingCartContext.shoppingCartItems;

      let check = false;
      itemsList.map((el: any) => {
        if (el.name === product.name) {
          el.quantity++;
          check = true;
        }
      });
      if (check) {
        return;
      }
      itemsList.push({
        name: product.name,
        img: product.img[0],
        price: product.price,
        quantity: 1,
      });
    shoppingCartContext.setShoppingCartItems(itemsList);
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCartContext.shoppingCartItems));
    alert("Added to Cart!");
  };

  return (
    <PDPBody>
      <BreadCrumb>
        <BCAnchor onClick={() => navigate(`/products/${product.category[0]}?page=1`)}>
          {" "}
          {product.category[0]}{" "}
        </BCAnchor>{" "}
        <BCP>&#62;</BCP>{" "}
        <BCAnchor
          onClick={() =>
            navigate(`/products/${product.category[0]}/${product.category[1]}?page=1`)
          }
        >
          {product.category[1]}
        </BCAnchor>{" "}
        <BCP>&#62;</BCP>{" "}
        <BCAnchor
          onClick={() =>
            navigate(
              `/products/${product.category[0]}/${product.category[1]}/${product.category[2]}?page=1`
            )
          }
        >
          {product.category[2]}
        </BCAnchor>{" "}
        <BCP>&#62;</BCP>
        <BCAnchor>{product.name}</BCAnchor>
      </BreadCrumb>
      <PDPName>{product.name}</PDPName>
      <ShipDetailsDiv>
        <ProductGalleryDiv>
          <SelectedPhotoDiv>
            <SelectedPhoto alt="ship photo" src={product.img[selectedImg]} />
          </SelectedPhotoDiv>
          <OtherPhotosDiv>
            <OtherPhotos
              alt="photo 1"
              src={product.img[0]}
              onClick={() => setSelectedImg(0)}
            ></OtherPhotos>
            <OtherPhotos
              alt="photo 2"
              src={product.img[1]}
              onClick={() => setSelectedImg(1)}
            ></OtherPhotos>
            <OtherPhotos
              alt="photo 3"
              src={product.img[2]}
              onClick={() => setSelectedImg(2)}
            ></OtherPhotos>
            <OtherPhotos
              alt="photo 4"
              src={product.img[3]}
              onClick={() => setSelectedImg(3)}
            ></OtherPhotos>
          </OtherPhotosDiv>
          <ShipDescription>{product.description}</ShipDescription>
        </ProductGalleryDiv>
        <ShipDescriptionDiv>
          <ShipStats>
            <ShipDetail>Manufacturer: {product.manufacturer}</ShipDetail>
            <ShipDetail>Length: {product.length}m </ShipDetail>
            <ShipDetail>Height: {product.height}m</ShipDetail>
            <ShipDetail>Mass: {product.mass}</ShipDetail>
            <ShipDetail>Max Crew: {product.maxCrew}</ShipDetail>
          </ShipStats>
          <ShipPrice>
            {product.price + " "}
            €/day
          </ShipPrice>
          <CartButtonDiv>
            <AddToCartButton onClick={addToCart}>Add To Cart</AddToCartButton>
          </CartButtonDiv>
        </ShipDescriptionDiv>
      </ShipDetailsDiv>
    </PDPBody>
  );
};

export default PDP;
