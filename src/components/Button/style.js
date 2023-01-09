import styled, { css } from "styled-components";
export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: 0.4s;
  font-size: 0.93rem;
  margin-top: 10px;

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "default":
        return css`
          padding: 10px 15px;
        `;
      case "medium":
        return css`
          padding: 10px;
        `;
    }
  }}
  ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case "brand1":
        return css`
          background-color: var(--primary200);
          color: var(--primary100);
          opacity: 70%;
          &:hover {
            opacity: 100%;
          }
        `;
      case "brand2":
        return css`
          background-color: var(--secundary200);
          color: var(--secundary100);
          opacity: 70%;
          &:hover {
            opacity: 100%;
          }
        `;
      case "brand3":
        return css`
          font-family: var(--font-family-1);
          font-size: var(--font-size-0);
          background: none;
          width: 8vh;

          display: inline-block;
          position: relative;
          color: black;

          :after {
            content: "";
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 2px;
            top: 15px;
            margin-top: 15px;
            left: 0;
            background-color: black;
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
          }

          :hover:after {
            transform: scaleX(1);
            transform-origin: bottom left;
            margin-top: 15px;
          }
        `;
      case "solid2":
        return css`
          background: var(--gray300);
          color: var(--gray200);
          &:hover {
            background: var(--brand100);
            color: var(--white100);
          }
        `;
    }
  }}
    @media (min-width: 900px) {
    font-size: 15px;
  }
`;
