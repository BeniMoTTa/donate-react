import styled from "styled-components";

export const StyledRegister = styled.div`
  animation: slideLeft 0.4s ease forwards;

  form {
    width: 100%;
    margin: 0px 10px;
    display: flex;
    position: relative;
    top: 92px;
    flex-direction: column;
    gap: 30px;
    /* position: relative;
    top: 120px; */
    text-align: left;

    textarea {
      outline: none;
      font-weight: var(--font-weight-2);
      width: 90%;
      border-bottom: 2px solid var(--black100);
    }

    textarea {
      height: 90px;
      resize: none;
    }
  }

  form h1 {
    font-size: 36px;
    font-weight: 800;
    color: var(--secundary100);
    font-family: var(--font-family-1);
  }

  .form-div {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }

  form h1 {
    font-size: 46px;
    font-weight: 800;
    color: var(--secundary100);
  }

  @media (min-width: 900px) {
    margin: 0px 0px;
    display: flex;
    height: 95vh;
    gap: 70px;
    animation: slideLeft 0.4s ease forwards;

    form {
      width: 600px;
      margin: 30px 0px;
      display: flex;
      position: relative;
      top: 0;
      flex-direction: column;
      text-align: left;

      textarea {
        outline: none;
        font-weight: var(--font-weight-2);
        width: 100%;
        border-bottom: 2px solid var(--black100);
      }

      textarea {
        height: 90px;
        resize: none;
      }

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
    }

    form h1 {
      font-size: 55px;
      font-weight: 800;
      color: var(--secundary100);
      font-family: var(--font-family-1);
    }

    .form-div {
      display: flex;
      gap: 27px;
      flex-direction: column;
    }
  }
`;

export const ImageDiv = styled.div`
  display: none;

  @media (min-width: 900px) {
    width: 456px;
    height: 100vh;
    display: flex;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const RegisterButton = styled.button`
  margin-top: 5px;
  width: 30%;
  color: black;
  text-align: left;
  font-size: var(--font-size-0);
  margin-top: 5px;
  font-weight: 800;
  font-family: var(--font-family-1);

  @media (min-width: 900px) {
    width: 30%;
    color: black;
    text-align: left;
    font-size: var(--font-size-0);
    margin-top: 45px;
    font-weight: 800;
    font-family: var(--font-family-1);
  }
`;
