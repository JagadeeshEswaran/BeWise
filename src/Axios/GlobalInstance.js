import axios from "axios";

const BeWise_Backend = axios.create({
  baseURL: "http://localhost:5001/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default BeWise_Backend;
