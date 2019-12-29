import axios from "axios";

const app = axios.create({
  baseURL: "https://mk-twitter-backend.herokuapp.com"
});

export default app;
