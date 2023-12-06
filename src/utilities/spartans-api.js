import sendRequest from "./send-request";
const BASE_URL = "/api/spartans";

export async function getAllImages() {
  return sendRequest(BASE_URL);
}

// export async function getOneSpartan() {
//     return sendRequest()
// }

export function createImage(imageData) {
  return sendRequest(`${BASE_URL}/generate`, "POST", imageData);
}
