  
import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:8085/mediatorApi/",
  baseURL: 'http://35.234.121.245:8085/mediatorApi',
  headers: {
    "Content-type": "application/json"
  }
});