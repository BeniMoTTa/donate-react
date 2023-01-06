/* eslint-disable default-case */
import styled, { css } from "styled-components";

interface iStyledButtonProps {
  buttonSize: string;
  buttonStyle: string;
}

export const StyledButton = styled.button<iStyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 5px;
  transition: 0.4s;

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "default":
        return css`
          padding-top: 4px;
          height: 30px;
          width: 34px;
          font-size: 24px;
          font-weight: var(--font-weight-1);
        `;
      case "medium":
        return css`
          height: 40px;
          font-size: var(--body);
          font-weight: var(--font-weight-1);
          width: max-content;
        `;
    }
  }}

  ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case "primaryDefault":
        return css`
          background: var(--primary200);
          border: 1.2px solid var(--primary100);
          color: var(--primary100);
          -webkit-box-shadow: 0px 0px 10px 0px rgba(255, 147, 112, 0.84);
          box-shadow: 0px 0px 10px 0px rgba(255, 147, 112, 0.84);

          &:hover {
            background: var(--primary100);
            border: 1.2px solid var(--white100);
            color: var(--white100);
          }
        `;

      case "primaryActive":
        return css`
          background: var(--primary100);
          border: 1.2px solid var(--white100);
          color: var(--white100);
          -webkit-box-shadow: 0px 0px 10px 0px rgba(255, 147, 112, 0.84);
          box-shadow: 0px 0px 10px 0px rgba(255, 147, 112, 0.84);

          &:hover {
            filter: brightness(0.9);
          }
        `;

      case "dashSubmit":
        return css`
          background-color: var(--color-grey-100);
          color: var(--color-grey-300);

          &:hover {
            background: var(--color-grey-200);
            color: var(--color-white);
          }
        `;
    }
  }}
`;
