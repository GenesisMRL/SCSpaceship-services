import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import productsContext from "../../contexts/ProductsContext.js";
import FilterBox from "../FilterBox";
import { BreadCrumb, BCAnchor, BCP } from "../global-styles/index.js";
import Pagination from "../Pagination";
import {
  ListAndFilterDiv,
  PLPBody,
  PLPDiv,
  ProductContainer,
  ProductImg,
  ProductInfoDiv,
  ProductName,
  ProductPrice,
  StatsDiv,
  InnerStatsP,
  PLPFilterButton,
} from "./plp-styles";

type Prod =
  | Array<
      [
        string,
        {
          name: string;
          price: number;
          description: string;
          available: number;
          img: string[];
          category: { "0": string; "1": string; "2": string };
          manufacturer: string;
          manufacturerPathParam: string;
          length: number;
          height: number;
          mass: string;
          maxCrew: number;
        }
      ]
    >
  | [];

const PLP = () => {
  const location = useLocation();

  const useQueryParam = (param: string) => {
    return new URLSearchParams(location.search).get(param);
  };

  const pathParams = useLocation().search;
  const { category, category2, category3 } = useParams();
  const { manufacturerName } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [filteredProducts, setFilteredProducts] = useState<Prod>([]);
  const navigate = useNavigate();
  const productsData = useContext(productsContext);
  const page = Number(useQueryParam("page"));
  const sortBy = useQueryParam("sortby");
  const order = useQueryParam("order");
  const match = useQueryParam("match");
  const [currentProducts, setCurrentProducts] = useState(
    Object.entries(filteredProducts.slice(0, 5))
  );

  useEffect(() => {
    if (manufacturerName != undefined) {
      let prods = productsData.getAllProducts(sortBy, order);
      prods = prods.filter((p) => {
        const regex = new RegExp(manufacturerName);
        return p[1].manufacturerPathParam.match(regex);
      });
      if (match !== (undefined || null)) {
        prods = prods.filter((p) => {
          const regex = new RegExp(`^${match?.toUpperCase()}`, "gi");
          return p[1].name.match(regex);
        });
      }
      setFilteredProducts(prods);
      return;
    }
    if (
      category === undefined &&
      category2 === undefined &&
      category3 === undefined
    ) {
      let prods = productsData.getAllProducts(sortBy, order);
      if (match !== (undefined || null)) {
        prods = prods.filter((p) => {
          const regex = new RegExp(`^${match?.toUpperCase()}`, "gi");
          return p[1].name.match(regex);
        });
      }
      console.log(prods);
      setFilteredProducts(prods);
      return;
    }
    if (category2 === undefined && category3 === undefined) {
      let prods = productsData.getProductsByCategory(category, sortBy, order);
      if (match !== (undefined || null)) {
        prods = prods.filter((p) => {
          const regex = new RegExp(`^${match?.toUpperCase()}`, "gi");
          return p[1].name.match(regex);
        });
      }
      setFilteredProducts(prods);
      return;
    }
    if (category3 === undefined) {
      let prods = productsData.getProductsByTwoCategories(
        category,
        category2,
        sortBy,
        order
      );
      if (match !== (undefined || null)) {
        prods = prods.filter((p) => {
          const regex = new RegExp(`^${match?.toUpperCase()}`, "gi");
          return p[1].name.match(regex);
        });
      }
      setFilteredProducts(prods);
      return;
    }
    let prods = productsData.getProductsByThreeCategories(
      category,
      category2,
      category3,
      sortBy,
      order
    );
    if (match !== (undefined || null)) {
      prods = prods.filter((p) => {
        const regex = new RegExp(`^${match?.toUpperCase()}`, "gi");
        return p[1].name.match(regex);
      });
    }
    setFilteredProducts(prods);
  }, [
    category,
    category2,
    category3,
    sortBy,
    order,
    match,
    manufacturerName,
    page,
  ]);

  useEffect(() => {
    const indexOfLastProduct = page * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    setCurrentProducts(
      Object.entries(
        filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
      )
    );
  }, [page, filteredProducts]);

  const getBreadCrumb = () => {
    if (category3 != (undefined || null)) {
      return (
        <>
          <BCAnchor
            onClick={() => {
              navigate(`/products/${category}?page=1`);
            }}
          >
            {" "}
            {category}{" "}
          </BCAnchor>{" "}
          <BCP>&#62;</BCP>
          {console.log("PLP")}
          <BCAnchor
            onClick={() => {
              console.log("hey");
              navigate(`/products/${category}/${category2}?page=1`);
            }}
          >
            {" "}
            {category2}{" "}
          </BCAnchor>{" "}
          <BCP>&#62;</BCP>
          <BCAnchor>{category3}</BCAnchor>{" "}
        </>
      );
    }
    if (category2 != (undefined || null)) {
      return (
        <>
          <BCAnchor onClick={() => navigate(`/products/${category}?page=1`)}>
            {" "}
            {category}{" "}
          </BCAnchor>{" "}
          <BCP>&#62;</BCP>
          <BCAnchor>{category2}</BCAnchor>{" "}
        </>
      );
    }
    return (
      <BCAnchor>
        {manufacturerName
          ?.toLowerCase()
          .replace(/-/g, " ")
          .replace(/(?: |\b)(\w)/g, function (key, p1) {
            return key.toUpperCase();
          }) ||
          category ||
          "All Products"}
      </BCAnchor>
    );
  };

  return (
    <PLPBody>
      <BreadCrumb>{getBreadCrumb()}</BreadCrumb>
      <div style={{display: "flex", justifyContent: "space-evenly"}}>
      <PLPFilterButton
          selected={pathParams === `?sortby=name&order=ascending&page=${page}` ? true : false}
          onClick={() => navigate(`?sortby=name&order=ascending&page=${page}`)}
        >
          Name
        </PLPFilterButton>
        <PLPFilterButton
          selected={pathParams === `?sortby=price&order=ascending&page=${page}` ? true : false}
          onClick={() => navigate(`?sortby=price&order=ascending&page=${page}`)}
        >
          Price
        </PLPFilterButton>
        <PLPFilterButton
          selected={pathParams === `?sortby=size&order=ascending&page=${page}` ? true : false}
          onClick={() => navigate(`?sortby=size&order=ascending&page=${page}`)}
        >
          Size
        </PLPFilterButton>
        </div>
      <ListAndFilterDiv>
        <PLPDiv>
          {currentProducts.map(([key, value]: any) => {
            return (
              <ProductContainer key={key}>
                <ProductImg
                  onClick={() => navigate(`/product/${+value[0]}`)}
                  alt="ship img"
                  src={value[1].img[0]}
                />
                <ProductName>{value[1].name}</ProductName>
                <ProductInfoDiv>
                  <StatsDiv>
                    <InnerStatsP>Max Crew: {value[1].maxCrew}</InnerStatsP>
                    <InnerStatsP>Length: {value[1].length} m</InnerStatsP>
                    <InnerStatsP>{value[1].available} available</InnerStatsP>
                  </StatsDiv>
                  <ProductPrice>
                    {value[1].price + " "}
                    Sp$/month
                  </ProductPrice>
                </ProductInfoDiv>
              </ProductContainer>
            );
          })}
        </PLPDiv>
        <FilterBox />
      </ListAndFilterDiv>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        productsPerPage={productsPerPage}
        totalPosts={Object.entries(filteredProducts).length}
      />
    </PLPBody>
  );
};

export default PLP;
