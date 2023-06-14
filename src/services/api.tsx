import axios from "axios";

const Api = axios.create({
  baseURL: "https://api-canil.herokuapp.com",
});

export default Api;
