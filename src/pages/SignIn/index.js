import React from "react";
import { Form, Input } from "@rocketseat/unform";

import { Container } from "./styles";

import history from "../../services/history";

export default function SignIn() {
  return (
    <Container>
      <div>
        <img
          src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1.png"
          alt="Twitter"
        />

        <Form>
          <Input name="name" placeholder="Nome de usuário" type="text" />

          <button type="submit">Entrar</button>
        </Form>
      </div>
    </Container>
  );
}
