import styled from "styled-components";

export const PDPName = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-family: monospace;
  color: whitesmoke;
  padding: 15px;
  margin: 0px;
`;

export const PDPBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  background-image: url("https://blenderartists.org/uploads/default/optimized/4X/9/4/4/94410ad08b9abc64c1ab6d215c1a4449a5a0ef9c_2_1380x776.jpg");
  background-size: 2000px 1500px;
  border-radius: 5px;
  
`;

export const ShipDetailsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  padding: 10px;
  margin-top: 20px;
  @media (max-width: 830px) {
    flex-direction: column;
    align-items: center ;
  }
`;

//GALLERY
export const ProductGalleryDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  width: 46%;
  @media (max-width: 830px) {
    width: 80%;
  }
`;

export const SelectedPhotoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px;
`;

export const SelectedPhoto = styled.img`
  max-width: 644px;
  max-height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const OtherPhotosDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const OtherPhotos = styled.img`
  
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  border: 1px solid black;
  width: 20%;
  height: 25%;
  &:hover {
    border: 1px solid rgba(255, 195, 255, 0.6);
  }
`;

//TEXT
export const ShipDescriptionDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 25px;
  width: 40%;
  height: fit-content;
  margin-bottom: 120px;
  @media (max-width: 830px) {
    width: 80%;
  }
`;

export const ShipPrice = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  color: lightgrey;
  font-size: 34px;
  font-family: monospace;
  text-align: justify;
  margin-top: 20px;
  @media (max-width: 830px) {
    font-size: 24px;
  }
`;

export const ShipDescription = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  font-size: 20px;
  font-family: monospace;
  text-align: justify;
  white-space: pre-line;
  line-height: 25px;
  background-color: rgba(255, 195, 255, 0.2);
  border-radius: 5px;
  padding: 5px;
  margin: 0px;
  margin-top: 20px;
`;

export const ShipStats = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: 180px;
  background-color: rgba(255, 195, 255, 0.2);
  border-radius: 5px;
  padding: 5px;
  margin: 0px;
  
`;

export const ShipDetail = styled.p`
  color: white;
  font-size: 16px;
  width: 90%;
  font-family: monospace;
  text-align: center;
  white-space: pre-line;
  line-height: 25px;
  background-color: rgba(255, 195, 255, 0.2);
  border-radius: 5px;
  margin: 2px;
  @media (max-width: 799px) {
    font-size: 10px;
  }
`;

//BUTTON
export const CartButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 0px;
  height: 100%;
  margin: 0px;
`;

export const AddToCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 70%;
  height: 80%;
  border-radius: 5px;
  font-size: 20px;
  font-family: monospace;
  cursor: pointer;
  color: #000000;
  border: 2px solid rgba(0, 0, 0, 0.0);
  background-color: rgba(255, 195, 255, 0.6);
  transition: 1s ease;
  &:hover {
    border: 2px solid rgba(255, 195, 255, 0.8);
  }
  @media (max-width: 830px) {
    width: 100%;
  }
`;

