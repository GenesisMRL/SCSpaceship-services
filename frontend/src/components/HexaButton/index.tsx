import React from "react";
import "./hexagonButtons.css";

const HexaButton = ({ src }: any) => {
  return (
    <>
      <div className="grid">
        <ul id="hexGrid">

          
          <li className="hex">
            <div className="hexIn">
              <a className="hexLink" href="#">
                <div
                  className="img"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1417436026361-a033044d901f?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;w=1080&amp;fit=max&amp;s=faa4e192f33e0d6b7ce0e54f15140e42);",
                  }}
                ></div>
                <h1 id="demo1">This is a title</h1>
                <p id="demo2">
                  Some sample text about the article this hexagon leads to
                </p>
              </a>
            </div>
          </li>

        </ul>
      </div>
    </>
  );
};

export default HexaButton;
