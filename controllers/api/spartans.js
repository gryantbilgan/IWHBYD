const Spartan = require("../../models/spartan");
const axios = require("axios");

const create = async (req, res) => {
  console.log(req.body.description);
  try {
    // Extract Spartan data from request body
    const { user, name, hair, hairLength, eye, armor, armorColor, bio } =
      req.body;

    // Construct the prompt based on properties
    const prompt = `Imagine a Spartan warrior inspired by the iconic characters from the Halo universe. This Spartan, stands tall in a lush forest. With ${hairLength} ${hair} hair flowing in the wind and ${eye} eyes scanning the surroundings with determination, the Spartan is clad in ${armor} armor with a ${armorColor} hue. Confidently holding their helmet under their left arm, the Spartan's ${hair} hair adds to the dynamic scene. The forested landscape provides a picturesque backdrop, with towering trees and vibrant greenery. Capture the essence of this powerful scene in an image, showcasing the Spartan's full body and the serenity of the forest.`;

    // Prepare the data payload for the OpenAI API call
    const data = JSON.stringify({
      prompt: prompt,
    });

    // Configure the Axios request
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.openai.com/v1/images/generations",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
        // Add any additional headers if needed
      },
      data: data,
    };

    // Make the Axios request to OpenAI
    const response = await axios.request(config);

    // Extract the generated image data from the OpenAI response
    const generatedImageData = response.data;
    const imageUrl = generatedImageData.data[0].url;
    console.log(generatedImageData.data[0].url);
    // Send the generated image data as the response to the client
    // res.json(generatedImageData);

    // Create new Spartan with the OpenAI generated image URL
    const newSpartan = new Spartan({
      user,
      name,
      hair,
      hairLength,
      eye,
      armor,
      armorColor,
      bio,
      imageUrl,
    });

    // Save the New Spartan
    const savedSpartan = await newSpartan.save();

    // Send the saved Spartan as the response to the client
    res.status(201).json(savedSpartan);
  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error generating image:", error);
    // Send an error response to the client
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { create };

// async function createSpartan(req, res) {
//   try {
//     const { name, hair, hairLength, eye, armor, armorColor, bio } = req.body;

//     // Construct the prompt based on properties
//     const prompt = `Imagine a Spartan warrior inspired by the iconic characters from the Halo universe. This Spartan, stands tall in a lush forest. With ${hairLength} ${hair} hair flowing in the wind and ${eye} eyes scanning the surroundings with determination, the Spartan is clad in ${armor} armor with a ${armorColor} hue. Confidently holding their helmet under their left arm, the Spartan's ${hair} hair adds to the dynamic scene. The forested landscape provides a picturesque backdrop, with towering trees and vibrant greenery. Capture the essence of this powerful scene in an image, showcasing the Spartan's full body and the serenity of the forest.`;

//     // Generate a new image using the prompt
//     const imageUrl = await generateImage(prompt);

//     // Create new spartan image with the url
//     const newSpartan = new Spartan({
//       ...req.body,
//       openAIImage: { url: imageUrl },
//     });

//     // Save the new spartan
//     const savedSpartan = await newSpartan.save();
//     res.status(201).json(savedSpartan);
//     // Error handling
//   } catch (error) {
//     console.log("Error Creating New Spartan:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }

// const Spartan = require("../../models/spartan");
// const axios = require("axios");



// const create = async (req, res) => {

//   console.log(req.body.description)
//   try {
//     // Prepare the data payload for the OpenAI API call
//     const data = JSON.stringify({
//       "prompt": req.body.description
//     });

//     // Configure the Axios request
//     const config = {
//       method: 'post',
//       maxBodyLength: Infinity,
//       url: 'https://api.openai.com/v1/images/generations',
//       headers: { 
//         'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, 
//         'Content-Type': 'application/json',
//         // Add any additional headers if needed
//       },
//       data: data,
//     };

//     // Make the Axios request to OpenAI
//     const response = await axios.request(config);

//     // Extract the generated image data from the OpenAI response
//     const generatedImageData = response.data;
//     console.log(generatedImageData.data[0].url)
//     // Send the generated image data as the response to the client
//     res.json(generatedImageData);
//   } catch (error) {
//     // Handle any errors that occur during the process
//     console.error("Error generating image:", error);
//     // Send an error response to the client
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// module.exports = { create };