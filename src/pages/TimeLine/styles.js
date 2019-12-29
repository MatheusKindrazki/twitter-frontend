import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: rgb(236, 241, 248, 0.3);

  div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    padding-top: 100px;
    img {
      max-width: 30px;
      margin-bottom: 30px;
    }

    form {
      display: flex;
      width: 100%;
      max-width: 600px;
      padding: 15px;
      background: rgba(0, 0, 0, 0.02);
      border-radius: 5px;

      textarea {
        padding: 15px;
        width: 100%;
        height: 50px;
        resize: none;

        border: 5px solid rgb(236, 241, 248);
        outline: none;
        box-shadow: none;
        border-radius: 5px;

        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
        color: #333;
        &:placeholder-shown,
        &::placeholder,
        &::-moz-placeholder {
          color: #333;
        }
      }
    }
  }
`;
