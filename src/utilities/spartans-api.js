import sendRequest from "./send-request";
const BASE_URL = "/api/spartans";

// export async function getAllSpartans() {
//     return sendRequest(BASE_URL)
// }

// export async function getOneSpartan() {
//     return sendRequest()
// }

export default async function createImage(imageData) {
  try {
    const response = await sendRequest(BASE_URL, "POST", imageData);
    return response;
  } catch (error) {
    console.error("Error creating image:", error);
    throw error;
  }
}
