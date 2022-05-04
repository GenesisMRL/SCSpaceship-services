import styled from "styled-components";


export const PagDiv = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`
export const PagButton = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 20px;
    border:none;
    background: none;
    padding: 0px;
    color: lightgrey;
    cursor: pointer;
    &:hover {
        color: #04DAF6;
    }
` 

export const StyledNumber = styled.p `
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 20px;
    padding: 0px 5px;
    color: lightgrey;
    position: relative;
    top: 8px;
`