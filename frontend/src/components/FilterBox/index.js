import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import productsContext from "../../contexts/ProductsContext.js";
import {
  ButtonsContainer,
  FilterBoxContainer,
  FilterButton,
  TopFilterButton,
  FilterTitle,
  FBDiv,
  FilterSearchInput,
  TitleDiv,
  ManufIcon,
  ManufText,
} from "./filterbox-styles";

const FilterBox = () => {

  const useQueryParam = (param) => {
    return new URLSearchParams(useLocation().search).get(param);
  };

  const navigate = useNavigate();
  const searchBarRef = useRef("");
  const { category, category2, category3 } = useParams();
  const { manufacturerName } = useParams();
  const { manufacturerIcons } = useContext(productsContext);
  const page = useQueryParam("page");

  const urlParams = useLocation().search;
  return (
    <FilterBoxContainer>
      <FBDiv>
        <FilterSearchInput
          ref={searchBarRef}
          onChange={(e) => {
            e.target.value !== ""
              ? navigate("?match=" + e.target.value + `&page=${page}`)
              : category3 != (undefined || null)
              ? navigate(`${category}/${category2}/${category3}?page=1`)
              : category2 != (undefined || null)
              ? navigate(`${category}/${category2}'page=1`)
              : category != (undefined || null)
              ? navigate(`${category}?page=1`)
              : manufacturerName != (undefined || null)
              ? navigate(`${manufacturerName}?page=1`)
              : navigate(`?page=${page}`);
          }}
          placeholder="SEARCH BY NAME"
          type="text"
        />
      </FBDiv>
      <ButtonsContainer>
        <TitleDiv>
          <FilterTitle>SORT BY:</FilterTitle>
        </TitleDiv>

        <TopFilterButton
          selected={urlParams === `?sortby=name&order=ascending&page=${page}` ? true : false}
          onClick={() => navigate(`?sortby=name&order=ascending&page=${page}`)}
        >
          Name Ascending
        </TopFilterButton>

        <TopFilterButton
          selected={
            urlParams === `?sortby=price&order=ascending&page=${page}` ? true : false
          }
          onClick={() => navigate(`?sortby=price&order=ascending&page=${page}`)}
        >
          Price Ascending
        </TopFilterButton>

        <TopFilterButton
          selected={urlParams === `?sortby=size&order=ascending&page=${page}` ? true : false}
          onClick={() => navigate(`?sortby=size&order=ascending&page=${page}`)}
        >
          Size Ascending
        </TopFilterButton>

        <TopFilterButton
          selected={
            urlParams === `?sortby=name&order=descending&page=${page}` ? true : false
          }
          onClick={() => navigate(`?sortby=name&order=descending&page=${page}`)}
        >
          Name Descending
        </TopFilterButton>

        <TopFilterButton
          selected={
            urlParams === `?sortby=price&order=descending&page=${page}` ? true : false
          }
          onClick={() => navigate(`?sortby=price&order=descending&page=${page}`)}
        >
          Price Descending
        </TopFilterButton>

        <TopFilterButton
          selected={
            urlParams === `?sortby=size&order=descending&page=${page}` ? true : false
          }
          onClick={() => navigate(`?sortby=size&order=descending&page=${page}`)}
        >
          Size Descending
        </TopFilterButton>
      </ButtonsContainer>
      <ButtonsContainer>
        <TitleDiv>
          <FilterTitle>MANUFACTURERS:</FilterTitle>
        </TitleDiv>
        {manufacturerIcons.map((manufacturer) => {
          return (
            <FilterButton
              key={Object.keys(manufacturer)[0]}
              selected={manufacturerName === Object.keys(manufacturer)[0] ? true : false}
              onClick={() => navigate(`/manufacturer/${Object.keys(manufacturer)[0]}?page=1`)}
            >
              <ManufIcon src={manufacturer[Object.keys(manufacturer)[0]].path} />
              <ManufText>{manufacturer[Object.keys(manufacturer)[0]].displayName}</ManufText>
            </FilterButton>
          );
        })}
       
      </ButtonsContainer>
    </FilterBoxContainer>
  );
};

export default FilterBox;
