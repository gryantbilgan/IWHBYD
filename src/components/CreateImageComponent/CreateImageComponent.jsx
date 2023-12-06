import React, { useEffect, useState } from 'react';
import { createImage } from '../../utilities/spartans-api';

export default function CreateImageComponent() {
  const [image, setImage] = useState('')
  const [input, setInput] = useState('')
  // const [prompt, setPrompt] = useState('')
  
  // useEffect(() => {
  //   createImageApiCall();
  // }, [prompt]);

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const handleClick = () => {
    createImageApiCall();
    setInput('');
  }

  const createImageApiCall = async () => {
    try {
      const imageData = {
        description: input
        // Add other properties as needed
      };

      const result = await createImage(imageData);
      console.log(result);
      const imageUrl = result.data[0].url;
      console.log(imageUrl);
      setImage(imageUrl);
      console.log('Image created successfully:', result);
    } catch (error) {
      console.error('Error creating image:', error.message);
    }
  };

  return (
    <>
      <p className='text-white'>Create Image Component</p>
      <img src={ image }/>
      <input type="text" value={ input } onChange={handleChange} placeholder='Enter Your Prompt' />
      {/* Add your button content and functionality here */}
      <button onClick={handleClick}>Render</button>
    </>
  );
}
