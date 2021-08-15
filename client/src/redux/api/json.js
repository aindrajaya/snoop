  
import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:3006/",
  baseURL: "https://json-server-snoop.herokuapp.com/",
  headers: {
    "Content-type": "application/json"
  }
});