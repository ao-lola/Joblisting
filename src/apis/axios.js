import axios from "axios";

export default axios.create({
  baseURL: "https://jobs.github.com/positions.json?location=new+york",
});
