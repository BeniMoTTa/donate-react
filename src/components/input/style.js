import styled, { css } from "styled-components";

export const Label = styled.label`
  color: #999;
  font-weight: normal;
  opacity: 0.75;
  order: 1;
  position: absolute;
  font-size: 20px;
  top: -6px;
  /*outline: 0;*/
  padding: 0 10px;
  pointer-events: none;
  text-shadow: none;
  text-transform: capitalize;
  transform-origin: left top;
  transform: scale(1) translate3d(0, 18px, 0);
  transition: 0.3s ease-out;

  @media screen and (max-width: 1024px) {
    top: -9px;
  }
`;

export const StyledInput = styled.input`
  ${({ error }) => {
    if (error) {
      return css`
        animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;

        @keyframes shake {
          10%,
          90% {
            transform: translate3d(-1px, 0, 0);
          }

          20%,
          80% {
            transform: translate3d(2px, 0, 0);
          }

          30%,
          50%,
          70% {
            transform: translate3d(-4px, 0, 0);
          }

          40%,
          60% {
            transform: translate3d(4px, 0, 0);
          }
        }

        ::placeholder {
          color: red;
        }
      `;
    } else {
      return css`
        ::placeholder {
          color: black;
          font-weight: 500;
        }

        & :valid {
          ::placeholder {
            color: transparent;
          }
        }
      `;
    }
  }}
  width: 90%;
  height: 36px;
  border-bottom: 2px solid black;

  @media (min-width: 900px) {
    font-family: inherit;
    width: 100%;
    height: 55px;
    border: 0;
    border-bottom: 2px solid black;
    outline: none;
    font-size: 1.3rem;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 99%;
`;

export const StyledP = styled.p`
  color: red;
  font-weight: 700;
  text-align: left;

  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;

