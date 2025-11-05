import axios from "axios";

export const api = axios.create({
  baseURL: "https://ll.thespacedevs.com/2.3.0",
  timeout: 20000,
});
