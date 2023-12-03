const Spartan = require('../../models/spartan')

// Handle a POST request to the '/generate-image' endpoint
const createSpartan = async (req, res) => {
    // Send a request to OpenAI's image generation endpoint
    try {
      // Make a POST request to OpenAI
      const openiAIResponse = await axios.post(
        "https://api.openai.com/v1/image-generation-endpoint",
        // Send the request payload (data from the client) to OpenAI
        req.body,
        {
          // Include necessary headers for the request
          headers: {
            // Add authorization using the OpenAI API key
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            // Specify that the data being sent is in JSON format
            "Content-Type": "application/json",
          },
        }
      );
      // Extract the generated image data from the OpenAI response
      const generatedImageData = openiAIResponse.data;
      // Send the generated image data as the response to the client
      res.json(generatedImageData);
    } catch {
      // Handle any errors that occur during the process
      console.error("Error generating image:", error);
      // Send an error response to the client
      res.status(500).json({ error: "Internal Server Error" });
    }
  });