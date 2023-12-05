const Spartan = require("../../models/spartan");

module.exports = {
  createSpartan,
};

async function createSpartan(req, res) {
  try {
    const { name, hair, hairLength, eye, armor, armorColor, bio } = req.body;

    // Construct the prompt based on properties
    const prompt = `Imagine a Spartan warrior inspired by the iconic characters from the Halo universe. This Spartan, stands tall in a lush forest. With ${hairLength} ${hair} hair flowing in the wind and ${eye} eyes scanning the surroundings with determination, the Spartan is clad in ${armor} armor with a ${armorColor} hue. Confidently holding their helmet under their left arm, the Spartan's ${hair} hair adds to the dynamic scene. The forested landscape provides a picturesque backdrop, with towering trees and vibrant greenery. Capture the essence of this powerful scene in an image, showcasing the Spartan's full body and the serenity of the forest.`;

    // Generate a new image using the prompt
    const imageUrl = await generateImage(prompt);

    // Create new spartan image with the url
    const newSpartan = new Spartan({
      ...req.body,
      openAIImage: { url: imageUrl },
    });

    // Save the new spartan
    const savedSpartan = await newSpartan.save();
    res.status(201).json(savedSpartan);
    // Error handling
  } catch (error) {
    console.log("Error Creating New Spartan:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}