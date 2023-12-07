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
      console.log(response)
      setGeneratedImages(response);
    } catch (error) {
      console.log("Error Fetching Images:", error);
    }
  }
  return (
    <div>
      <h2 className="text-white">Fire Team DNC</h2>
      {generatedImages.map((image) => (
        <div key={image._id} className="text-white">
          <img src={image.imageUrl} alt={`Spartan: ${image.name}`} />
          <p>Name: {image.name}</p>
          <p>Bio: {image.bio}</p>
        </div>
      ))}
    </div>
  );
}
