import React from "react";
import { SidebarDiv } from "./sidebar-styles";
import { FaUserAstronaut } from "react-icons/fa";
import getCookie from "../../utils";

const Sidebar = ({ openSidebar, toggleHiddenS }: any) => {
  return (
    <>
      <SidebarDiv openSidebar={openSidebar} toggleHiddenS={toggleHiddenS}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button onClick={toggleHiddenS}>{"<<"}</button>
        </div>
        <div style={{
          width: "200px",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
          border: "5px solid black",
          borderRadius: "50%",
          padding: "12px",
        }}>
          <FaUserAstronaut style={{ width: "100px", height: "100px" }} />
        </div>
        <p style={{
          marginTop: "20px",

         }}>
        {getCookie("loggedin") === "true"
              ? localStorage.getItem("username")
              : "Please Register First!"}
        </p>
       <div style={{ 
         marginTop: "20px",
         width: "100%",
         }}>
         <button style={{
           width: "99%",
           height: "40px",
           marginTop: "60px",
           border: "0px",
           backgroundColor: "rgba(205, 205, 255, 0.9)",
          }}>
            Client Area
         </button>
         <button style={{
           width: "99%",
           height: "40px",
           margin: "1px",
           border: "0px",
           backgroundColor: "rgba(205, 205, 255, 0.9)",
          }}>
            Wishlist
         </button>
         <button style={{
           width: "99%",
           height: "40px",
           margin: "1px",
           border: "0px",
           backgroundColor: "rgba(205, 205, 255, 0.9)",
          }}>
            Settings
         </button>
         <button style={{
           width: "99%",
           height: "40px",
           margin: "1px",
           border: "0px",
           backgroundColor: "rgba(205, 205, 255, 0.9)",
          }}>
            Purchase History
         </button>
         <button style={{
           width: "99%",
           height: "40px",
           margin: "1px",
           border: "0px",
           backgroundColor: "rgba(205, 205, 255, 0.9)",
          }}>
            Membership Access 
         </button>
         <button style={{
           width: "99%",
           height: "40px",
           margin: "1px",
           border: "0px",
           backgroundColor: "rgba(205, 205, 255, 0.9)",
          }}>
            Contact Us
         </button>
         
         </div>  
      </SidebarDiv>
    </>
  );
};

export default Sidebar;
