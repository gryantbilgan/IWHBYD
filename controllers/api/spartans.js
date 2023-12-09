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
      // `Generate an image of a Spartan warrior inspired by the iconic characters from the Halo universe. The Spartan stands tall in a vast desert landscape, with their face clearly visible. The Spartan has ${hair} hair of ${hairLength} length, flowing in the wind. Their eyes, colored ${eye}, scan the surroundings with determination.The Spartan is clad in ${armor} armor with a ${armorColor} hue. Confidently holding their helmet under their left arm, the Spartan's [choose hair color] hair adds to the dynamic scene. The surrounding desert provides a dramatic backdrop, with rolling dunes and a clear sky. Capture the essence of this powerful scene, showcasing the Spartan from head to toe.`

      `In a vast desert beneath an azure sky, a futuristic sci-fi Spartan soldier, clad in cutting-edge ${armor} armor, stands tall as an imposing figure. The super-soldier's helmet cradled under his left arm reveals distinct features—${hairLength}, ${hair} hair flowing, and piercing ${eye} eyes. The ${armorColor}-hued exoskeleton enhances strength and speed, its intricate details visible from head to toe. The soldier's muscular build, seamlessly integrated with the armor, creates a formidable presence amid the tranquil oasis. Sunlight casts a warm, golden glow, symbolizing advanced technology and unwavering strength. This captivating scene blends sci-fi futurism with the timeless beauty of the desert, capturing the essence of a super-soldier.`


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
