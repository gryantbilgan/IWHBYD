import OpenAI from "openai";
import sendRequest from "./send-request";

// const openai = new OpenAI({
//   apiKey: 'My API Key', // defaults to process.env["OPENAI_API_KEY"]
// });

// const response = await openai.createImage({
//     model: "dall-e-3",
//     prompt: "a white siamese cat",
//     n: 1,
//     size: "1024x1024",
//   });
//   image_url = response.data.data[0].url;

const OPEN_AI_API_URL = "https://api.openai.com/v1/image-generation-endpoint";

export async function generateImage(prompt) {
  return sendRequest(OPEN_AI_API_URL, "POST", {
    model: "dall-e-3",
    prompt,
    n: 1,
    size: "512x512",
  });
}
