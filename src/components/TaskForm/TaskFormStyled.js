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
      input {
        width: 100%;
        height: 45px;
        border: 2px solid #ffcd04;
        border-radius: 4px;
        font-weight: 400;
        font-size: 18px;
        padding-left: 16px;
      }
      & :focus {
        outline: none;
      }
      span {
        position: absolute;
        top: 15px;
        right: 15px;
      }
      .notValid {
        border-color: red;
        font-size: 15px;
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
  @media (min-width:375px) and (max-width:376px){
    form {
      flex-direction: column;
      button {
        margin-left:auto; 
        margin-top: 16px;
      }
      div {
        /* flex-direction: column; */
        width:327px;
      input {
        width: 306px;
        font-size: 12px;
        padding-left:none;
      }
      .notValid {
        font-size: 12px;
      }
      
      }
     
    }
  }


`;
