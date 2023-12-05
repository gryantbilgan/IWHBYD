import React, { useEffect, useState } from 'react';
import { createImage } from '../../utilities/spartans-api';

export default function CreateImageComponent() {
  const [image, setImage] = useState()
  useEffect(() => {
    createImageApiCall();
  }, []);

  const createImageApiCall = async () => {
    try {
      const imageData = {
        description: 'A dog with sunglasses',
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
      <p>Create Image Component</p>
      <img src={ image }/>
      {/* Add your button content and functionality here */}
    </>
  );
}
