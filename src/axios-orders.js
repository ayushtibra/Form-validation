import axios from "axios";

const instance = axios.create({
  baseURL: "https://form-validation-a426b.firebaseio.com/"
});

export default instance;
