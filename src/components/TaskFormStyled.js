import styled from "styled-components";

export const TaskFormStyled = styled.div`
  padding-top: 56px;
  font-size: 18px;

  h4 {
    font-weight: 400;
  }
  form {
    display: flex;
    div {
      position: relative;
      width: 954px;
      /* margin-right:24px; */
      input {
        width:100%;
        height: 45px;
        border: 2px solid yellow;
        border-radius: 4px;
        font-weight: 400;
        font-size: 18px;
        padding-left:16px;
      };
      & :focus {
        outline: none;
      }
      span {
        position:absolute;
        top:15px;
        right:15px;
      }

    }
    button {
      width: 100px;
      height: 52px;
      margin-left: 48px;
      background-color: #008594;
      border-radius: 4px;
      text-align: center;
      border: none;
      outline: none;
      cursor: pointer;
      color: white;
      font-weight: 500;
    }
    
  }
`;
