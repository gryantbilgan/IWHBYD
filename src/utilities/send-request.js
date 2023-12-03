import axios from "axios";
import { getToken } from "./users-service";

// send-request.js

export default async function sendRequest(url, method = "GET", payload = null) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = { method, url };
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.data = payload;
  }

  const token = getToken();
  if (token) {
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${token}`;
  }
  try {
    const res = await axios(options);
    return res.data;
  } catch (error) {
    console.error("Error in Request:", error);
    throw error;
  }
}