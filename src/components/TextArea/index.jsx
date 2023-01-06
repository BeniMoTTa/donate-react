import React from "react";
import { StyledFieldset } from "./style";
import { StyledP } from "../input/style";
import { forwardRef } from "react";


const Textarea = forwardRef(({ id, error, label, placeholder, ...rest }, ref) => {
    return (
        <>
            <StyledFieldset>
                {label && <label htmlFor={id}>{label}</label>}
                <textarea id={id} placeholder={placeholder} ref={ref} {...rest} ></textarea>
                {error && <StyledP>{error.message}</StyledP>}
            </StyledFieldset>
        </>
    );
});

export default Textarea;
