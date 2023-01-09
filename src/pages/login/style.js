import styled from "styled-components";

export const StyledLogin = styled.div`
  margin: 0 auto;
  > form {
    width: 93%;
    margin: 0px 10px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: relative;
    top: 92px;
    text-align: left;

    > h1 {
      font-size: 36px;
      color: var(--secundary100);
      font-family: var(--font-family-1);
    }
  }

  .form-div {
    display: flex;
    gap: 20px;
    flex-direction: column;
  }

  .questionDiv {
    margin: 35px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;

    .hoverUnderLineAnimation {
      display: inline-block;
      position: relative;
      color: black;
    }

    .hoverUnderLineAnimation:after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: black;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    .hoverUnderLineAnimation:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }

  .questionDiv p {
    font-size: var(--font-size-1);
    color: var(--secundary100);
    font-family: var(--font-family-1);
  }

  .questionDiv a {
    color: var(--black100);
    font-size: var(--font-size-2);
    font-family: var(--font-family-1);
  }

  @media (min-width: 900px) {
    margin: 0px 0px;
    height: 95vh;
    display: flex;
    gap: 70px;
    animation: slideLeft 0.4s ease forwards;

    > form {
      width: 570px;
      margin: 90px 0px;
      display: flex;
      position: relative;
      top: 0;
      bottom: 0;
      flex-direction: column;
      text-align: left;

      > h1 {
        font-size: 46px;
        font-weight: var(--font-weight-3);
        color: var(--secundary100);
        font-family: var(--font-family-1);
      }

      button {
        display: flex;
        justify-content: flex-start;
        font-size: var(--font-size-0);
      }
    }

    .form-div {
      display: flex;
      gap: 20px;
      flex-direction: column;
    }

    .questionDiv {
      margin: 60px 0px;
      width: 396px;
      display: flex;
      flex-direction: column;
      gap: 40px;
      .hoverUnderLineAnimation {
        display: inline-block;
        position: relative;
        color: black;
      }

      .hoverUnderLineAnimation:after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        top: 15px;
        margin-top: 10px;
        left: 0;
        background-color: black;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
      }

      .hoverUnderLineAnimation:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
        margin-top: 10px;
      }

      font-family: var(--font-family-2);
    }

    .questionDiv p {
      font-weight: var(--font-weight-3);
      font-size: var(--font-size-1);
      font-family: var(--font-family-1);
      color: var(--secundary100);
    }

    .questionDiv a {
      width: fit-content;
      font-family: var(--font-family-1);
      font-size: 26px;
      font-weight: 400;
    }
  }
`;

export const ImageDiv = styled.div`
  display: none;
  height: 100vh;
  @media (min-width: 900px) {
    width: 50vh;
    display: flex;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
