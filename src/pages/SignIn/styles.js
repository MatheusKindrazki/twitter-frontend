import styled from "styled-components";

export const Container = styled.div`
  background: #1da1f2;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 100%;
    max-width: 300px;
    height: 320px;
    background: white;
    border-radius: 4px;

    box-shadow: 0px 16px 12px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 40px;

    img {
      max-width: 80px;
      margin-bottom: 30px;
    }

    form {
      width: 100%;
      margin-top: 30px;
      display: flex;
      flex-direction: column;

      input {
        display: block;
        outline: none;

        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        padding: 15px;

        color: #333;

        &:placeholder-shown,
        &::placeholder,
        &::-moz-placeholder {
          color: #333;
        }
      }

      p {
        color: red;
        font-size: 12px;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
      }

      button {
        margin-top: 20px;
        background: #1da1f2;
        height: 45px;
        border: none;
        outline: none;
        box-shadow: none;

        border-radius: 2px;

        font-size: 14px;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;

        color: white;
      }
    }
  }
`;
