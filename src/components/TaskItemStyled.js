import styled from "styled-components";

export const TaskItemStyled = styled.div`
display:flex;
justify-content: space-between;
/* padding-top:20px; */
padding-right:20px;
border-bottom:1px solid #E5E5E5;
width:100%;

div{
    display:flex;
    input {
        width:24px;
        padding-right:50px;

    };
    h4{
        font-size:18px;
        font-weight:400;
        color:#666666;
    }

};
span {
    padding-top:22px;
}
`