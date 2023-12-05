// import sendRequest from "./send-request";

// // const openai = new OpenAI({
// //   apiKey: 'My API Key', // defaults to process.env["OPENAI_API_KEY"]
// // });

// // const response = await openai.createImage({
// //     model: "dall-e-3",
// //     prompt: "a white siamese cat",
// //     n: 1,
// //     size: "1024x1024",
// //   });
// //   image_url = response.data.data[0].url;

// // const OPENAI_API_URL = "https://api.openai.com/v1/image/generations";

// // export async function generateImage(prompt) {
// //   try {
// //     const res = await sendRequest(OPENAI_API_URL, "POST", {
// //       model: "dall-e-3",
// //       n: 1,
// //       size: "512x512",
// //       style: "vivid",
// //       prompt: `${prompt}`
// //     });
// //     // check if the response has the expected data
// //     if (res && res.data && res.data.data && res.data.data[0]) {
// //       const imageUrl = res.data.data[0].url;
// //       return imageUrl;
// //     } else {
// //       // If response structure is unexpected, handle error
// //       throw new Error("Unexpected response structure from OpenAI API");
// //     }
// //   } catch (error) {
// //     // Handle specific error conditions or provide generic error message
// //     if (error.res && error.res.status === 401) {
// //       // Unauthorized - invalid key or insufficient permissions
// //       throw new Error("Unauthorized: Invalid API Key");
// //     } else if (error.res && error.res.status === 403) {
// //       // Forbidden - Key does not have access to the resource
// //       throw new Error(
// //         "Forbidden: API Key does not have access to the OpenAI API"
// //       );
// //     } else {
// //       // Provide generic error message
// //       throw new Error("Error generating image");
// //     }
// //   }
// // }

// const OPEN_AI_API_URL = "https://api.openai.com/v1/image/generations";
// const API_KEY = process.env.OPENAI_API_KEY;

// export async function generateImage(prompt) {
//   try {
//     const res = await sendRequest(
//       OPEN_AI_API_URL,
//       "POST",
//       {
//         model: "dall-e-3",
//         n: 1,
//         size: "512x512",
//         style: "vivid",
//         prompt: `${prompt}`,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${API_KEY}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     if (res && res.data && res.data.data && res.data.data[0]) {
//       const imageUrl = res.data.data[0].url;
//       return imageUrl;
//     } else {
//       throw new Error("Unexpected response structure from OpenAI API");
//     }
//   } catch (error) {
//     if (error.res && error.res.status === 401) {
//       throw new Error("Unauthorized: Invalid API Key");
//     } else if (error.res && error.res.status === 403) {
//       throw new Error(
//         "Forbidden: API Key does not have access to the OpenAI API"
//       );
//     } else {
//       throw new Error("Error generating image");
//     }
//   }
// }
