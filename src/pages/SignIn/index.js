import React from "react";

import { Container } from "./styles";

import history from "../../services/history";

export default function SignIn() {
  function handleSubmit() {
    history.push("/tweets");
  }
  return (
    <Container>
      <h1>Entrar</h1>
      <button onClick={handleSubmit} type="button">
        logar
      </button>
    </Container>
  );
}
