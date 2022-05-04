import styled from "styled-components";

export const FilterBoxContainer = styled.div`
  display: flex;
  position: sticky;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 185, 255, 0.3);
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  width: 28%;
  height: 845px;
  margin-top: 28px;
  @media(max-width: 1089px){
    display: none;
  }
`;

export const FBDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 185, 255, 0.3);
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  width: 90%;
  text-align: center;
  margin-top: 15px;
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 185, 255, 0.3);
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  width: 80%;
  text-align: center;
  margin-bottom: 10px;
`;

export const FilterTitle = styled.p`
  font-family: monospace;
  font-size: 15px;
  color: rgb(255, 255, 255);
  padding: 0px;
  margin: 0px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 185, 255, 0.3);
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  width: 90%;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: 15px;
`;

export const TopFilterButton = styled.button`
  height: 35px;
  width: 28%;
  background-color: ${(props) =>
    props.selected === false
      ? "rgba(255, 225, 245, 0.5)"
      : "rgba(215, 195, 215, 0.2)"};
  border: 2px solid rgba(255, 185, 255, 0.3);
  border-radius: 5px;
  margin: 5px;
  font-family: monospace;
  font-size: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    text-decoration: none;
    background-color: rgba(215, 195, 215, 0.2);
  }
  @media(max-width: 1134px){
    font-size: 8px;
  }
`;

export const FilterButton = styled.button`
  height: 50px;
  width: 45%;
  background-color: ${(props) =>
    props.selected == false
      ? "rgba(255, 225, 245, 0.5)"
      : "rgba(215, 195, 215, 0.2)"};
  border: 2px solid rgba(255, 185, 255, 0.3);
  border-radius: 5px;
  margin: 5px;
  font-family: monospace;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
    text-decoration: none;
    background-color: rgba(215, 195, 215, 0.2);
  }
 `;

export const FilterSearchInput = styled.input`
  height: 50px;
  padding: 0px;
  margin: 0px;
  border: 1px solid rgba(255, 185, 255, 0.3);
  border-radius: 5px;
  text-align: center;
  font-size: 20px;
  background-color: rgba(255, 195, 255, 0.2);
  border-radius: 5px;
  color: whitesmoke;
  font-family: "monospace";
  text-decoration: none;
  &:hover {
    background-color: rgba(255, 195, 255, 0.6);
  }
`;

export const SearchButton = styled.button`
  height: 50px;
  background-color: rgba(255, 225, 245, 0.5);
  border-radius: 5px;
  margin: 10px;
  font-family: monospace;
`;

export const ManufIcon = styled.img`
  justify-self: flex-start;
`;
export const ManufText = styled.p`
  padding: 0px;
  margin: 0px;
  width: 70%;
  text-align: flex-end;
  font-size: 10px;
  @media(max-width: 1352px){
    font-size: 8px;
  }
`;
