import axios from "axios";

const app = axios.create({
  baseURL: "http://mk-twitter-backend.herokuapp.com"
});

export default app;
