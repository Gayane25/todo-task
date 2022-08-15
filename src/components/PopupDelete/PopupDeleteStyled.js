import styled from "styled-components";

export const PopupDeleteStyled = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  div {
    width: 400px;
    height: 200px;
    padding-top: 50px;
    border-radius: 4px;
    background-color: #ffffff;
    text-align: center;
    z-index: 1;
    h4 {
      font-size: 1.125rem;
      font-weight: 500;
      color: #008594;
      line-height: 28px;
    }
    span {
      padding: 20px;
      font-size: 1.125rem;
      font-weight: 600;
      cursor: pointer;
    }
  }
  @media (min-width: 375px) and (max-width: 376px) {
    div {
      width: 324px;
      height: 140px;
      padding: 0 2px;
      h4 {
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
`;
