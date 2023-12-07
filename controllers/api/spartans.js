const Spartan = require("../../models/spartan");
const axios = require("axios");

const create = async (req, res) => {
  console.log(req.body);
  try {
    // Extract Spartan data from request body
    const { user, name, hair, hairLength, eye, armor, armorColor, bio } =
      req.body.description;

    // Construct the prompt based on properties
    const prompt =
      //`Imagine a Spartan warrior inspired by the iconic characters from the Halo universe. This Spartan, stands tall in a lush forest. With ${hairLength} ${hair} hair flowing in the wind and ${eye} eyes scanning the surroundings with determination, the Spartan is clad in ${armor} armor with a ${armorColor} hue. Confidently holding their helmet under their left arm, the Spartan's ${hair} hair adds to the dynamic scene. The forested landscape provides a picturesque backdrop, with towering trees and vibrant greenery. Capture the essence of this powerful scene in an image, showcasing the Spartan's full body and the serenity of the forest.`;

      //`Generate an image of a Spartan warrior inspired by the iconic characters from the Halo universe. The Spartan stands tall in a vast desert landscape, with their face clearly visible. The Spartan has ${hair} hair of ${hairLength} length, flowing in the wind. Their eyes, colored ${eye}, scan the surroundings with determination.The Spartan is clad in ${armor} armor with a ${armorColor} hue. Confidently holding their helmet under their left arm, the Spartan's [choose hair color] hair adds to the dynamic scene. The surrounding desert provides a dramatic backdrop, with rolling dunes and a clear sky. Capture the essence of this powerful scene, showcasing the Spartan from head to toe.`

    `Generate a vivid image of a Spartan warrior inspired by the iconic characters from the Bungie's Halo universe. In a desert landscape, depict the Spartan standing upright, facing forward, and holding their helmet securely under their left arm. Ensure the face of the Spartan is clearly visible with distinctive facial features.

    For the Spartan's appearance:
    - Hair Color: ${hair}
    - Hair Length: ${hairLength}
    - Eye Color: ${eye}

    Regarding the armor:
    - Armor Type: ${armor}
    - Armor Color: ${armorColor}

    Capture the essence of the Halo universe by emphasizing the unique and futuristic characteristics of the futuristic Spartan, ensuring a modern and recognizable interpretation. The focus should be on the Spartan's interaction with the desert environment and the distinct portrayal of their armor, facial features, and the act of holding the helmet.`;

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
    console.log("OpenAI API Response:", response.data);

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

const index = async (req, res) => {
  try {
    const allSpartans = await Spartan.find({});
    res.status(200).json(allSpartans);
  } catch (error) {
    console.error("Error Fetching All Spartans:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { create, index };
