/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import api from "../../services/api";

import { Container, Button } from "./styles";

export default function Tweet({ tweet }) {
  const [liked, setLiked] = useState(false);

  function alreadyLiked() {
    let userLikes = localStorage.getItem("@Tweet:likes");

    if (!userLikes) {
      localStorage.setItem("@Tweet:likes", "[]");

      return setLiked(false);
    }

    userLikes = JSON.parse(userLikes);

    if (!userLikes.length) {
      return setLiked(false);
    }

    const find = userLikes.find(item => item._id === tweet._id);

    if (!find) {
      return setLiked(false);
    }

    return setLiked(true);
  }

  useEffect(() => alreadyLiked(), []);

  async function handleLike() {
    if (liked) return;

    let userLikes = JSON.parse(localStorage.getItem("@Tweet:likes"));

    userLikes.push(tweet);

    localStorage.setItem("@Tweet:likes", JSON.stringify(userLikes));

    setLiked(true);

    await api.post(`likes/${tweet._id}`);
  }

  return (
    <Container>
      <strong>
        <img
          src={`https://api.adorable.io/avatars/50/${
            tweet.author.split(" ")[0]
          }`}
          alt={tweet.author}
        />
        {tweet.author}
      </strong>
      <p>{tweet.content}</p>
      <Button type="button" liked={liked} onClick={handleLike}>
        {tweet.likes}
      </Button>
    </Container>
  );
}
