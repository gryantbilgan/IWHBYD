const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
// const openai = require("openai");
const axios = require("axios");
// Always require and configure near the top
require("dotenv").config();
// Connect to the database
require("./config/database");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require("./config/checkToken"));

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

const port = process.env.PORT || 3001;

// Put API routes here, before the "catch all" route
app.use("/api/users", require("./routes/api/users"));
app.use("/api/spartans", require("./routes/api/spartans"));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX/API requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Handle a POST request to the '/generate-image' endpoint
app.post("/generate", async (req, res) => {
  // Send a request to OpenAI's image generation endpoint
  try {
    // Make a POST request to OpenAI
    const openiAIResponse = await axios.post(
      "https://api.openai.com/v1/images/generations",
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
  } catch (error){
    // Handle any errors that occur during the process
    console.error("Error generating image:", error);
    // Send an error response to the client
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
