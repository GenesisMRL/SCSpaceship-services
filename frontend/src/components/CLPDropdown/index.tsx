import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";

const CLPDropdown = ({ text, selected, navigatePath, subCategories }: any) => {
  const navigate = useNavigate();
  const { category2, category3 } = useParams();

  return (
    <div
      className="btn-group"
      style={{
        width: "100%",
        backgroundColor:
          selected === true
            ? "rgba(255, 195, 255, 0.6)"
            : "rgba(255, 195, 255, 0.2)",
        borderRadius: "5px",
        fontSize: "16px",
      }}
    >
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => navigate(navigatePath + "?page=1")}
        style={{
          width: "70%",
          backgroundColor:
            selected === true
              ? "rgba(157, 160, 209, 1)"
              : "rgba(255, 195, 255, 0.2)",
          border: "2px solid rgba(155, 195, 255, 0.7)",
        }}
      >
        {text}
      </button>
      <button
        type="button"
        className="btn btn-danger dropdown-toggle dropdown-toggle-split"
        style={{
          backgroundColor:
            selected === true
              ? "rgba(157, 160, 209, 1)"
              : "rgba(255, 195, 255, 0.2)",
          border: "2px solid rgba(155, 195, 255, 0.7)",
        }}
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div
        className="dropdown-menu"
        style={{
          backgroundColor: "rgba(104, 142, 187, 0.9)",
          position: "relative",
          top: "100px",
        }}
      >
        {subCategories.map((cat: any) => {
          return (
            <div key={cat.categories3}>
              <h6
                className="dropdown-header"
                onClick={() => {
                  navigate(`${navigatePath}/${cat.category2}?page=1`);
                }}
                style={{
                  fontSize: "16px",
                  color: "whitesmoke",
                  cursor: "pointer",
                }}
              >
                {cat.category2}
              </h6>
              {cat.categories3.map((subCat: any) => {
                return (
                  <a
                  key={subCat}
                    className={`dropdown-item ${
                      category2 === cat.category2 && category3 === subCat
                        ? "active"
                        : ""
                    }`}
                    onClick={() => {
                      navigate(`${navigatePath}/${cat.category2}/${subCat}?page=1`);
                    }}
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    {subCat}
                  </a>
                );
              })}
              <div className="dropdown-divider"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CLPDropdown;
