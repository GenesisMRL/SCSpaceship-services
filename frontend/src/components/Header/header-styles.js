import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";

export const StyledHeader = styled.header`
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  left: 0px;
  padding: 20px;
  width: 100vw;
  height: 180px;
  display: flex;
  align-items: center;
  background: url("https://i.pinimg.com/originals/7c/ed/32/7ced32d6cfb80d49545444c0a382de3b.jpg");
  background-size: 125% 200px;
  text-align: center;
  box-shadow: 0px 8px 35px rgb(2, 29, 61);
  @media (max-width: 539px){
    height: 120px;
  }
`;

export const StyledTabs = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  left: 0px;
  padding: 20px;
  width: 100vw;
  height: 60px;
  display: flex;
  background-color: rgba(25, 143, 185, 0.8);
  background-size: 100% 200px;
  text-align: center;
  box-shadow: 0px 10px 35px rgba(25, 143, 185, 0.8);
  @media (max-width: 731px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 200px;
  } ;
`;

export const NavButtonHeader = styled(Link)`
  border: 2px solid rgba(255, 195, 255, 0.2);
  height: 24px;
  width: 250px;
  margin: 10px;
  padding: 10px;
  position: relative;
  top: 30px;
  background-color: rgba(255, 195, 255, 0.2);
  text-decoration: none;
  &:hover {
    color: whitesmoke;
    text-decoration: none;
    background-color: rgba(255, 195, 255, 0.15);
  }
  border-radius: 5px;
  color: whitesmoke;
  font-family: "monospace";
  font-size: 16px;
  @media (max-width: 813px) {
    font-size: 10px;
  }
  @media (max-width: 539px) {
    font-size: 10px;
  }
`;

export const NavButtonLogout = styled.button`
  border: 2px solid rgba(255, 195, 255, 0.2);
  height: 40px;
  width: 166px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 30px;
  background-color: rgba(255, 195, 255, 0.2);
  text-decoration: none;
  &:hover {
    color: whitesmoke;
    text-decoration: none;
    background-color: rgba(255, 195, 255, 0.15);
  }
  border-radius: 5px;
  color: whitesmoke;
  font-family: "monospace";
  font-size: 16px;
  @media (max-width: 813px) {
    font-size: 10px;
    width: 120px;
  }
  @media (max-width: 539px) {
    font-size: 10px;
    width: 60px;
    top: 10px;
  }
`;

export const NavButtonTabs = styled(Link)`
  border: 2px solid rgba(155, 195, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  height: 40px;
  width: 250px;
  margin: 0px;
  padding: 0px;
  background-color: ${(props) =>
    props.selected === true
      ? "rgba(255, 195, 255, 0.6)"
      : "rgba(255, 195, 255, 0.2)"};
  border-radius: 5px;
  color: whitesmoke;
  font-family: "monospace";
  text-decoration: none;
  &:hover {
    text-decoration: none;

    color: whitesmoke;
    background-color: rgba(255, 195, 255, 0.6);
  }
  @media (max-width: 731px) {
    width: 100%;
  }
`;

export const NavImage = styled(NavLink)`
  height: 25px;
  width: 25px;
  margin: 10px;
  padding: 10px;
  background-color: rgba(255, 25, 25, 0);
  border-radius: 5px;
`;

export const ClientDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  margin: 50px;
  padding: 10px;
  background-color: rgba(255, 25, 25, 0);
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 539px) {
    width: 14px;
    height: 14px;
    margin: 20px;
  }
`;

export const CartImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  margin: 10px;
  padding: 10px;
  background-color: rgba(255, 25, 25, 0);
  border-radius: 5px;
`;

export const HeaderTitle = styled(Link)`
  font-family: monospace;
  color: rgba(47, 4, 37, 0.8);
  font-weight: bold;
  text-shadow: -3px -3px #f0f0f0;
  font-size: 80px;
  align-self: center;
  justify-self: center;
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    cursor: pointer;
    color: rgba(47, 4, 37, 0.8);
  }
  @media (max-width: 963px) {
    font-size: 60px;
  }
  @media (max-width: 813px) {
    font-size: 50px;
  }
  @media (max-width: 539px) {
    font-size: 30px;
  }
`;

export const HeaderSlogan = styled.h2`
  font-family: monospace;
  color: rgba(47, 4, 37, 0.8);
  text-shadow: -1px -1px #f0f0f0;
  font-size: 25px;
  align-self: center;
  justify-self: center;
  margin: 0px;
  padding: 0px;
  @media (max-width: 963px) {
    font-size: 20px;
  }
  @media (max-width: 813px) {
    font-size: 15px;
  }
  @media (max-width: 576px) {
    display: none;
  }
`;

export const HomeIcon = styled.img`
  max-width: 100px;
  min-width: 100px;
  max-height: 100px;
  min-height: 100px;
  margin: 0px;
  position: relative;
  @media (max-width: 813px) {
    max-width: 75px;
    min-width: 75px;
    max-height: 75px;
    min-height: 75px;
  }
  @media (max-width: 539px) {
    max-width: 50px;
    min-width: 50px;
    max-height: 50px;
    min-height: 50px;
  }
`;

export const HomeText = styled.p`
  font-family: monospace;
  position: relative;
  top: -6px;

  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
  z-index: -1;
  color: whitesmoke;
  width: 100%;
  @media (max-width: 813px) {
    font-size: 12px;
    top: -12px;
  }
  @media (max-width: 539px) {
    font-size: 8px;
    top: -6px
  }
`;

export const CartIcon = styled(GiShoppingCart)`
  position: relative;
  max-width: 100px;
  min-width: 100px;
  max-height: 100px;
  min-height: 100px;
  padding-bottom: 15px;
  color: whitesmoke;
  z-index: 10;
  @media (max-width: 813px) {
    max-width: 75px;
    min-width: 75px;
    max-height: 75px;
    min-height: 75px;

  }
  @media (max-width: 539px) {
    max-width: 50px;
    min-width: 50px;
    max-height: 50px;
    min-height: 50px;
    top:26px;
  }
`;

export const CartDiv = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 813px) {
    width: 150px;
  }
  @media (max-width: 539px) {
    width: 100px;

  }
`;

export const ResponsiveButtonDiv = styled.div`
  width: 250px;
  @media (max-width: 731px) {
    width: 48%;
  }
`;

export const ResponsiveLoginButtonDiv = styled.div`
  @media (max-width: 539px) {
    
  }
`;
