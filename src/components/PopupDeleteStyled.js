import styled from "styled-components";

export const PopupDeleteStyled=styled.div`
 position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(169, 169, 169, 0.7);
  div {
    width: 400px;
  height: 200px;
  padding-top:50px;
  border-radius: 4px;
  background-color: #ffffff;
  text-align: center;
  z-index: 1;
  h4 {
    font-size:18px;
    font-weight:500;
    color: #008594;
  };
  span {
    padding:20px;
    font-size:18px;
    font-weight:600;
  }
  }
`