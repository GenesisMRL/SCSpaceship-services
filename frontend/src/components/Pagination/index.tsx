import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PagButton, PagDiv, StyledNumber } from "./pagination-styles";

const Pagination = ({ productsPerPage, totalPosts }: any) => {
  const useQueryParam = (param: string) => {
    return new URLSearchParams(useLocation().search).get(param);
  };

  const [page, setPage] = useState(Number(useQueryParam("page")));
  const path = useLocation().pathname;
  const params = useLocation().search;
  const navigate = useNavigate();

  // console.log(path + "\n" + params + "\n" + prevPageNum + "\n" + nextPageNum, path + params.replace("page=\d", `page=${page - 1}`));

  const pageNumbers = [];

  const regex = /page=\d*/g;

  for (let i = 1; i <= Math.ceil(totalPosts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const previousPage = () => {
    if (Number(page) > 1) {
      console.log("page:" + page);
      console.log(path + params.replace(regex, `page=${page - 1}`));
      navigate(path + params.replace(regex, `page=${page - 1}`));
      setPage(page -1);
    }
  };

  const nextPage = () => {
    if (Number(page) < pageNumbers.length) {
      navigate(path + params.replace(regex, `page=${page + 1}`));
      setPage(page + 1);
    }
  };

  return (
    <>
      <PagDiv>
        <PagButton onClick={previousPage}>&#60;</PagButton>
        <StyledNumber>
          {page}/{pageNumbers.length}
        </StyledNumber>
        <PagButton onClick={nextPage}>&#62;</PagButton>
      </PagDiv>
    </>
  );
};

export default Pagination;
