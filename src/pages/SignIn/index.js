import React, { useState } from "react";
import { Form, Input } from "@rocketseat/unform";

import { Container } from "./styles";

import history from "../../services/history";

import documentTitle from "../../utils/documentTitle";

export default function SignIn() {
  documentTitle("Login");

  const [error, setError] = useState(null);

  function handleSubmit({ name }) {
    if (!name) {
      setError("O Nome de usuário é obrigatório!");

      return false;
    }

    localStorage.setItem("@Tweet:name", name);

    history.push("/tweets");
  }
  return (
    <Container>
      <div>
        <img
          src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1.png"
          alt="Twitter"
        />

        <Form onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome de usuário" type="text" />
          {error && <p>{error}</p>}
          <button type="submit">Entrar</button>
        </Form>
      </div>
    </Container>
  );
}
