/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Form, Textarea } from "@rocketseat/unform";

import Tweet from "../../components/Tweet";

import { Container } from "./styles";

import api from "../../services/api";
import io from "../../utils/ws";
import documentTitle from "../../utils/documentTitle";

export default function TimeLine() {
  const [tweets, setTweets] = useState([]);

  const [tweet, setTweet] = useState("");
  const [author] = useState(localStorage.getItem("@Tweet:name"));

  documentTitle(`TimeLine de ${author.split(" ")[0]}`);

  async function handleNewTweet({ keyCode }) {
    if (keyCode !== 13) return;

    await api.post("tweets", {
      author,
      content: tweet
    });

    setTweet("");
  }

  function waitingChange() {
    io.on("Tweet", getTweets);

    io.on("Like", getTweets);
  }

  useEffect(() => {
    waitingChange();
    getTweets();
  }, []);

  async function getTweets() {
    const response = await api.get("tweets");

    setTweets(response.data);
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
            maxLength="255"
            placeholder="O que está acontecendo?"
            onChange={e => setTweet(e.target.value)}
          />
        </Form>

        <ul>
          {!!tweets &&
            tweets.map(item => <Tweet tweet={item} key={item._id} />)}
        </ul>
      </div>
    </Container>
  );
}
