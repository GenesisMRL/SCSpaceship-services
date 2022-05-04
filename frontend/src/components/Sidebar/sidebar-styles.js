import styled from "styled-components";


export const SidebarDiv = styled.div`
  width: 300px;
  height: 145vh;
  background-color: rgba(205, 205, 255, 0.9);
  z-index: 100;
  position: absolute;
  left: -300px;
  transform: translateX(${props => props.openSidebar === true ? "300px" : 0});
  transition: all 0.3s ease-in-out;
  transform-origin: top left;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

