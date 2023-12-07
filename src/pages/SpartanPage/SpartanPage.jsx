import React, { useEffect, useState } from "react";
import { getAllImages } from "../../utilities/spartans-api";
export default function SpartanPage() {
  const [generatedImages, setGeneratedImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  async function getImages() {
    try {
      const response = await getAllImages();
      setGeneratedImages(response);
    } catch (error) {
      console.log("Error Fetching Images:", error);
    }
  }
  return (
    <div>
      <h2>Fire Team DNC</h2>
      {generatedImages.map((image) => (
        <div className="text-white" key={image._id}>
          <img src={image.imageUrl} alt={`Spartan: ${image.name}`} />
          <p>Name: {image.name}</p>
          <p>Bio: {image.bio}</p>
        </div>
      ))}
    </div>
  );
}
