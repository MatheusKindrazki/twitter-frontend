import React, { useState } from "react";
import { Form, Textarea } from "@rocketseat/unform";

import { Container } from "./styles";

import documentTitle from "../../utils/documentTitle";

export default function TimeLine() {
  const [tweet, setTweet] = useState("");
  const [author] = useState(localStorage.getItem("@Tweet:name"));

  documentTitle(`TimeLine de ${author.split(" ")[0]}`);

  function handleNewTweet({ keyCode }) {
    if (keyCode !== 13) return;
  }

  return (
    <Container>
      <div>
        <img
          src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1.png"
          alt="Twitter"
        />

        <Form onKeyDown={handleNewTweet}>
          <Textarea
            value={tweet}
            name="tweet"
            placeholder="O que está acontecendo?"
            onChange={e => setTweet(e.target.value)}
          />
        </Form>
      </div>
    </Container>
  );
}
