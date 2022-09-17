import axios from "axios";
// require("dotenv").config();
// const API_URL: any = process.env.URL_BACKEND;

export async function getLeaderboard() {
  const { data } = await axios.get("http://localhost:3007/leaderboard/");
  return data;
}