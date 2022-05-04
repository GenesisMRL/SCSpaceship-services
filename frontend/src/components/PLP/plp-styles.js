import styled from "styled-components";

export const ProductImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 8px;
  transition: transform 0.4s ease;
  transform-origin: 50% 50%;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    width: 100%;
  }
`;

export const PLPDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  color: #f4f4f4;
  padding: 20px;
  width: 68%;
  height: 70%;
  margin: 0;
  @media (max-width: 1089px) {
    width: 100%;
    justify-content: center;
  }
  @media (max-width: 1020px) {
    justify-content: center;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  width: 380px;
  height: 250px;
  overflow: hidden;
  background-color: rgba(255, 195, 255, 0.2);
  border-radius: 10px;
  margin: 20px;
  @media(max-width: 600px){
    margin: 0px;
    padding: 0px;
    margin-bottom: 10px;
  }
`;

export const ProductInfoDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

export const ProductName = styled.p`
  width: 100%;
  text-align: center;
  color: whitesmoke;
  padding: 2px;
  margin: 10px;
  font-size: 20px;
  font-family: monospace;
  font-weight: bold;
  background-color: rgba(55, 183, 209, 0.5);
  border-radius: 80px 15px;
  position: relative;
  top: -28px;
  background: radial-gradient(rgba(253, 94, 219, 0.5), rgba(55, 183, 209, 0.7));
  @media(max-width: 568px){
    font-size: 14px;
  }
`;

export const ProductPrice = styled.p`
  font-family: monospace;
  color: lightgrey;
  margin: 2px;
  align-self: flex-end;
  background: linear-gradient(rgba(253, 94, 219, 0), rgba(55, 183, 209, 0.7));
  border-radius: 80px 15px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ListAndFilterDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 50px;
  padding-bottom: 0px;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 10px;
  margin-bottom: 0px;
`;

export const PLPBody = styled.div`
  padding: 10px;
  background-image: url("https://blenderartists.org/uploads/default/optimized/4X/9/4/4/94410ad08b9abc64c1ab6d215c1a4449a5a0ef9c_2_1380x776.jpg");
  background-size: 2000px 1500px;
  border-radius: 5px;
`;

export const StatsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 12px;
  justify-content: space-evenly;
`;

export const InnerStatsP = styled.p`
  height: 20px;
  width: 30%;
  display: flex;
  flex-direction: row;
  text-align: center;
  position: relative;
  justify-content: center;
  align-items: center;
  background: radial-gradient(rgba(253, 94, 219, 0.5), rgba(55, 183, 209, 0.7));
  border-radius: 80px 15px;
  padding: 2px;
  margin: 0px;
  top: -16px;
  @media(max-width: 568px){
    font-size: 8px;
  }
`;

export const PLPFilterButton = styled.button`
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
  font-size: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
    text-decoration: none;
    background-color: rgba(215, 195, 215, 0.2);
  }
  @media(min-width: 1090px){
    display: none;
  }

`;

