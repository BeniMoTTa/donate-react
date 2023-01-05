import { Label, StyledInput, StyledP, Wrapper } from "./style";
import { forwardRef } from "react";

export const Input = forwardRef(({ type, id, error, label, ...rest }, ref) => {
  return (
    <>
      <Wrapper>
        <StyledInput type={type} error={error} id={id} ref={ref} {...rest} />
        <Label>{label}</Label>
      </Wrapper>
      {error && <StyledP>{error.message}</StyledP>}
    </>
  );
});
