import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import getCookie from "../../utils";
import CLPDropdown from "../CLPDropdown";
import { CenteredColumnDiv } from "../global-styles";
import ShoppingCart from "../ShoppingCart";
import Sidebar from "../Sidebar";
import {
  StyledHeader,
  StyledTabs,
  NavButtonHeader,
  NavButtonTabs,
  NavImage,
  NavButtonLogout,
  HeaderTitle,
  HeaderSlogan,
  CartIcon,
  CartDiv,
  HomeText,
  HomeIcon,
  CartImageDiv,
  ClientDiv,
  ResponsiveButtonDiv,
  ResponsiveLoginButtonDiv,
} from "./header-styles";

const Header = () => {
  const navigate = useNavigate();
  const [showCart, setShowCart] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const { category, category2 } = useParams();

  const regex = new RegExp("/products$");
  const path = useLocation().pathname;

  const toggleHidden = () => {
    setShowCart(!showCart);
  };
  const toggleHiddenS = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <>
      <ShoppingCart showCart={showCart} toggleHidden={toggleHidden} />
      <Sidebar openSidebar={openSidebar} toggleHiddenS={toggleHiddenS} />
      <StyledHeader>
        <div>
          <ClientDiv onClick={toggleHiddenS}>
            <HomeIcon
              src="https://i.imgur.com/a2lOuES.gif"
              onClick={toggleHiddenS}
            />
          </ClientDiv>
          <HomeText>
            {getCookie("loggedin") === "true"
              ? localStorage.getItem("username")
              : "WELCOME!"}
          </HomeText>
        </div>
        <CenteredColumnDiv>
          <HeaderTitle to="/">BUBBLE STORE</HeaderTitle>
          <HeaderSlogan>Your Dream Ship Within Reach!</HeaderSlogan>
        </CenteredColumnDiv>
        <CenteredColumnDiv>
          {getCookie("loggedin") === "true" ? (
            <CartDiv>
              <CartImageDiv to="/">
                <CartIcon onClick={toggleHidden} />
              </CartImageDiv>
              <div>
                <NavButtonLogout
                  onClick={() => {
                    document.cookie = "loggedin=false";
                    navigate("/");
                  }}
                >
                  Logout
                </NavButtonLogout>
              </div>
            </CartDiv>
          ) : (
            <CartDiv>
              <CartImageDiv to="">
                <CartIcon onClick={toggleHidden} />
              </CartImageDiv>
              <ResponsiveLoginButtonDiv>
                <NavButtonHeader to="/login"> Login</NavButtonHeader>
                <NavButtonHeader to="/register"> Register</NavButtonHeader>
              </ResponsiveLoginButtonDiv>
            </CartDiv>
          )}
        </CenteredColumnDiv>
      </StyledHeader>
      <StyledTabs>
        <NavButtonTabs
          selected={regex.test(path) ? true : false}
          to="/products?page=1"
        >
          ALL PRODUCTS
        </NavButtonTabs>
        <ResponsiveButtonDiv>
          <CLPDropdown
            text="MICRO"
            navigatePath="/products/Micro"
            selected={category === "Micro" ? true : false}
            subCategories={[
              {
                category2: "Combat",
                categories3: ["Interdiction", "Light Fighter", "Snub Fighter"],
              },
              {
                category2: "Transport",
                categories3: ["Light Freight", "Light Fighter"],
              },
              {
                category2: "Exploration",
                categories3: ["Pathfinder", "Explorer", "Touring"],
              },
              {
                category2: "Industrial",
                categories3: ["Mining", "Light Science"],
              },
              { category2: "Support", categories3: ["Reporting"] },
              { category2: "Competition", categories3: ["Racing"] },
              {
                category2: "Ground",
                categories3: ["Racing", "Explorer", "Military"],
              },
            ]}
          />
        </ResponsiveButtonDiv>
        <ResponsiveButtonDiv>
          <CLPDropdown
            text="SMALL"
            navigatePath="/products/Small"
            selected={category === "Small" ? true : false}
            subCategories={[
              {
                category2: "Combat",
                categories3: [
                  "Light Fighter",
                  "Medium Fighter",
                  "Heavy Fighter",
                  "Interdiction",
                  "Dropship",
                  "Medium Freight",
                ],
              },
              {
                category2: "Transport",
                categories3: ["Light Freight", "Medium Data", "Medium Freight"],
              },
              {
                category2: "Exploration",
                categories3: ["Pathfinder"],
              },
              {
                category2: "Industrial",
                categories3: ["Prospecting & Mining"],
              },
              { category2: "Support", categories3: ["Recovery"] },
              { category2: "Competition", categories3: ["Racing"] },
            ]}
          />
        </ResponsiveButtonDiv>
        <ResponsiveButtonDiv>
          <CLPDropdown
            text="MEDIUM"
            navigatePath="/products/Medium"
            selected={category === "Medium" ? true : false}
            subCategories={[
              {
                category2: "Combat",
                categories3: [
                  "Interdiction",
                  "Medium Freight",
                  "Dropship",
                  "Gunship",
                  "Heavy Gunship",
                ],
              },
              {
                category2: "Transport",
                categories3: ["Medium Data", "Passenger"],
              },
            ]}
          />
        </ResponsiveButtonDiv>
        <ResponsiveButtonDiv>
          <CLPDropdown
            text="BIG"
            navigatePath="/products/Big"
            selected={category === "Big" ? true : false}
            subCategories={[
              {
                category2: "Combat",
                categories3: [
                  "Destroyer",
                  "Corvette",
                  "Frigate",
                  "Heavy Gunship",
                  "Minelayer",
                  "Heavy Bomber",
                ],
              },
              {
                category2: "Transport",
                categories3: ["Heavy Freight", "Light Carrier", "Medium Data"],
              },
            ]}
          />
        </ResponsiveButtonDiv>
      </StyledTabs>
    </>
  );
};

export default Header;
