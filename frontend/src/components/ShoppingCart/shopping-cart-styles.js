import styled from "styled-components";

export const ModalBackground = styled.div`
  width: 100vw;
  height: 146vh;
  display: ${(props) => (props.showCart === true ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: 2;
  position: absolute;
`;

export const ModalContainer = styled.div`
  width: 550px;
  height: 250px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: rgba(215, 205, 245, 0.9);
  z-index: 2;
  position: relative;
  top: -200px;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const ModalDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30px;  
  justify-content: space-between;
  align-items: center;
  margin: 10px;;
`;

export const ModalButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
  height: 30px;
  justify-content: space-evenly;  
`;

export const ModalButton2 = styled.button`
  width: 40%;
  font-size: 12px;
  font-family: monospace;
  border: 1px solid black;
  border-radius: 50% 30% ;
  @media(max-width: 536px){
    font-size: 10px;
  }
`;

export const ModalTitle = styled.p`
  padding: 0px;
  margin: 0px;
  font-family: monospace;
  text-align: center;
`;

export const ModalButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: darkred;
  &:hover {
    background-color: red;
  }
  color: whitesmoke;
  border: 0px;
  padding: 0px;
  margin: 0px;
`;

export const ModalHr = styled.hr`
  padding: 0px;
  margin: 0px;
  margin-bottom: 2px;
  margin-top: 10px;
  width: 100%;
  border: 0.5px solid;
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  background: whitesmoke;
`;

export const SingleItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  border: 1px solid black;
`;

export const ProductImg = styled.img`
  position: relative;
  width: 100%;
  margin: 5px;
`;

export const ProductImgDiv = styled.div`
  width: 15%;
`;

export const ProductName = styled.p`
  font-family: monospace;
  font-size: 12px;
  width: 25%;
`;

export const ProductPrice = styled.p`
  font-family: monospace;
  font-size: 12px;
  width: 25%;
`;

export const ProductQuantity = styled.p`
  font-family: monospace;
  font-size: 12px;
  width: 25%;
  text-align: center;
`;

export const QuantityDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 25%;

`;

export const QuantityButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

export const QuantityButton = styled.button`
position: relative;
left: 50px;
top: 2px;
margin: 2px;
width: 20px;
height: 20px;
text-align: center;
justify-content: center;
align-items: center;
border: 1px solid black;
border-radius: 50%;
`;

