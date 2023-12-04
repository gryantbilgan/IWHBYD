import React, { useState } from 'react';
import axios from 'axios';

const CreateImageComponent = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedImageUrl, setGeneratedImageUrl] = useState(null);
  const [error, setError] = useState(null);

  const handleGenerateImage = async () => {
    try {
      // Make a request to your backend API to generate the image
      const response = await axios.post('/generate', { prompt });

      // Assuming the response contains the image URL
      setGeneratedImageUrl(response.data);
      console.log(response.data);
      setError(null);
    } catch (error) {
      // Handle errors from the API request
      setError(error.response?.data?.error || 'An error occurred while generating the image');
      setGeneratedImageUrl(null);
    }
  };

  return (
    <div>
      <h2>Create Image</h2>
      <div>
        <label htmlFor="prompt">Enter Prompt:</label>
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
      <button onClick={handleGenerateImage}>Generate Image</button>

      {generatedImageUrl && (
        <div>
          <h3>Generated Image:</h3>
          <img src={generatedImageUrl} alt="Generated Spartan" />
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default CreateImageComponent;

