import styled from "styled-components";

export const StyledLogin = styled.div`
  margin: 0 auto;
  form {
    width: 100%;
    margin: 0px 23px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: relative;
    top: 120px;
    text-align: left;
  }

  form h1 {
    font-size: 36px;
    font-weight: 800;
    color: var(--secundary100);
    font-family: var(--font-family-1);
  }

  .form-div {
    display: flex;
    gap: 20px;
    flex-direction: column;
  }

  .question-div {
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

  .question-div p {
    font-size: var(--font-size-1);
    font-weight: 800;
    color: var(--secundary100);
    font-family: var(--font-family-1);
  }

  .question-div a {
    width: 194px;
    color: black;
    font-size: var(--font-size-2);
    font-weight: 800;
    font-family: var(--font-family-1);
  }

  @media (min-width: 900px) {
    margin: 0px 0px;
    height: 95vh;
    display: flex;
    gap: 40px;
    animation: slideLeft 0.4s ease forwards;

    form {
      width: 570px;
      margin: 90px 0px;
      display: flex;
      position: relative;
      top: 0;
      bottom: 0;
      flex-direction: column;
      text-align: left;
    }

    form h1 {
      font-size: 46px;
      font-weight: 800;
      color: var(--secundary100);
      font-family: var(--font-family-1);
    }

    .form-div {
      display: flex;
      gap: 20px;
      flex-direction: column;

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

    .question-div {
      margin: 60px 0px;
      width: 396px;
      display: flex;
      flex-direction: column;
      gap: 40px;
      .hover-underline-animation {
        display: inline-block;
        position: relative;
        color: black;
      }

      .hover-underline-animation:after {
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

      .hover-underline-animation:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }

      font-family: var(--font-family-2);
    }

    .question-div p {
      font-weight: 800;
      color: var(--secundary100);
    }

    .question-div a {
      width: 194px;
      color: black;
      font-weight: 800;
    }
  }
`;

export const ImageDiv = styled.div`
  display: none;
  height: 100vh;
  @media (min-width: 900px) {
    width: 456px;
    display: flex;

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
`;

export const LogButton = styled.button`
  width: 64px;
  color: var(--black100);
  background-color: transparent;
  font-size: 20px;
  font-weight: 800;
  font-family: var(--font-family-1);
`;
