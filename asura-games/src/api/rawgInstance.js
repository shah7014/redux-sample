import axios from "axios";

const rawgInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: process.env.REACT_APP_API_KEY,
  },
});

export default rawgInstance;
