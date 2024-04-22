import axios from "axios";

const SkillStream_Backend = axios.create({
  baseURL: "http://localhost:5001/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default SkillStream_Backend;
