import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
    width: 100%;
    height: 260px;
    border-top: solid 1px black;
    position: relative;

    label{
        position: absolute;
    }


    textarea{
        width: 100%;
        height: 200px;
        background-color: var(--primary200);
        border-radius: 4px;
        resize: none;

    }



`;


