import sendRequest from "./send-request";
const BASE_URL = "/api/spartans";
const OPEN_AI_API_URL = "https://api.openai.com/v1/image/generations";
const API_KEY = process.env.OPENAI_API_KEY;

// export async function getAllSpartans() {
//     return sendRequest(BASE_URL)
// }

// export async function getOneSpartan() {
//     return sendRequest()
// }

export async function createSpartan(spartanData) {
  return sendRequest(BASE_URL, "POST", spartanData);
}



export async function generateImage(prompt) {
  try {
    const res = await sendRequest(
      OPEN_AI_API_URL,
      "POST",
      {
        model: "dall-e-3",
        n: 1,
        size: "512x512",
        style: "vivid",
        prompt: `${prompt}`,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (res && res.data && res.data.data && res.data.data[0]) {
      const imageUrl = res.data.data[0].url;
      return imageUrl;
    } else {
      throw new Error("Unexpected response structure from OpenAI API");
    }
  } catch (error) {
    if (error.res && error.res.status === 401) {
      throw new Error("Unauthorized: Invalid API Key");
    } else if (error.res && error.res.status === 403) {
      throw new Error(
        "Forbidden: API Key does not have access to the OpenAI API"
      );
    } else {
      throw new Error("Error generating image");
    }
  }
}