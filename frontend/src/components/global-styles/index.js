import styled from "styled-components";

export const CenteredColumnDiv = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const BackgroundImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  background: url("https://blenderartists.org/uploads/default/optimized/4X/9/4/4/94410ad08b9abc64c1ab6d215c1a4449a5a0ef9c_2_1380x776.jpg");
  background-size: 2000px 1500px;
  border-radius: 5px;
`;

export const BreadCrumb = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-family: monospace;
  color: violet;
  padding: 5px;
  padding-top: 0px;
  padding-bottom: 0px;
  margin: 0px;
  margin-top: 10px;
`;

export const BCP = styled.p`
  color: lightgrey;
  margin: 5px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const BCAnchor = styled.a`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
