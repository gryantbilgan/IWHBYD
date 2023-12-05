

// export async function getAllSpartans() {
//     return sendRequest(BASE_URL)
// }

// export async function getOneSpartan() {
//     return sendRequest()
// }

import sendRequest from "./send-request";
const BASE_URL = "/api/spartans/generate";

export function createImage(imageData) {
    return sendRequest(BASE_URL, "POST", imageData);
}