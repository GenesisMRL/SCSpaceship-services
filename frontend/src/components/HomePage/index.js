import React from "react";
import { HomeVideo } from "./home-styles";
import video from "../../assets/video/home-video3.mp4";
import HexaButton from "../HexaButton";

const Home = () => {
  return (
    <>
    <a href="https://leitariadaquintadopaco.com/produtos/eclair-classico-2/" style={{
      color: "white", 
      position:"fixed", 
      top: "0px",
      zIndex: "-1",
      fontSize: "12px",
      width: "100%",
      textAlign: "center"
      }}>YOU FOUND THE SECRET LINK!!</a>
    <HomeVideo autoPlay loop muted>
      <source src={video} type="video/mp4"/>
    </HomeVideo>
    </>
  );
};

export default Home;
