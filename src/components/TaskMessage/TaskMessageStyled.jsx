import styled from "styled-components";

export const TaskMessageStyled=styled.div`
 /* display: flex;
flex-direction:column;
justify-content: center;  */
text-align:center;
padding-top:140px;

h4 {
    color:#ACACAC;
    font-size:1.5rem;
    font-weight:500;
    line-height: 36px;
    letter-spacing: 0.2px;
};
h3 {
    color: #666666;
    font-size:36px;
    font-weight:500;
    letter-spacing: 0.002em;
    line-height: 54px;

}
@media (min-width:375px) and (max-width:376px){
    padding-top:120px;
    h4{
        font-size:14px;
        line-height: 21px;
    }
    h3 {
        font-size:18px;
        line-height: 27px;
    }
}

`;