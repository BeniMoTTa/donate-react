import styled from "styled-components";

export const StyledRegister = styled.div`
  animation: slideLeft 0.4s ease forwards;

  > form {
    width: 96%;
    margin: 0px 10px;
    padding-bottom: 30px;
    display: flex;
    position: relative;
    top: 92px;
    flex-direction: column;
    gap: 30px;
    text-align: left;

    > h1 {
      font-size: var(font-size-0);
      font-weight: 800;
      position: relative;
      top: 20px;
      color: var(--secundary100);
      font-family: var(--font-family-1);
    }
  }

  .form-div {
    display: flex;
    gap: 10px;
    flex-direction: column;

    > textarea {
      outline: none;
      font-size: 20px;
      font-weight: var(--font-weight-2);
      width: 90%;
      border-bottom: 2px solid var(--black100);
      height: 60px;
      resize: none;

      &::placeholder {
        color: var(--black100);
      }
    }
  }

  @media (min-width: 900px) {
    margin: 0px 0px;
    display: flex;
    height: 95vh;
    gap: 70px;
    animation: slideLeft 0.4s ease forwards;

    > form {
      width: 617px;
      overflow-x: scroll;
      margin: 25px 0px;
      display: flex;
      position: relative;
      top: 0;
      flex-direction: column;
      text-align: left;

      ::-webkit-scrollbar {
        display: none;
      }

      > h1 {
        font-size: 55px;
        font-weight: 800;
        color: var(--secundary100);
        font-family: var(--font-family-1);
      }

      button {
        display: flex;
        justify-content: flex-start;
        font-size: var(--font-size-0);
        width: 16vh;
      }
    }

    .form-div {
      display: flex;
      gap: 27px;
      flex-direction: column;

      > textarea {
        outline: none;
        font-weight: var(--font-weight-2);
        width: 100%;
        border-bottom: 2px solid var(--black100);
        height: 60px;
        resize: none;
      }
    }
  }
`;

export const ImageDiv = styled.div`
  display: none;

  @media (min-width: 900px) {
    width: 50vh;
    height: 100vh;
    display: flex;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const RegisterButton = styled.button`
  margin-top: 5px;
  width: 30%;
  color: var(--black100);
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
    margin-top: 20px;
    background-color: transparent;
    font-weight: 800;
    font-family: var(--font-family-1);
  }
`;
