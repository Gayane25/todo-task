import styled from "styled-components";

export const Checkbox = styled.div`
display:flex;
justify-content: flex-end;
label {
    
    right:0;
    font-size:18px;
    input[type="checkbox"] {
        width:24px;
        height:24px;
    }
    &:checked:after {
        background-color: #008594;
    }

}

`;