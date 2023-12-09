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
      console.log(response);
      setGeneratedImages(response);
    } catch (error) {
      console.log("Error Fetching Images:", error);
    }
  }

  return (
    <div className="flex flex-wrap min-h-1/2 text-white p-4">
      <h2 className="neon-text text-lg font-bold mb-4 w-full text-center">
        Fire Team DNC
      </h2>
      {generatedImages.map((image) => (
        <div
          key={image._id}
          className="bg-gray-800 p-2 rounded-md mb-4 max-w-xs w-1/6 mx-2 h-1/6"
        >
          <img
            src={image.imageUrl}
            alt={`Spartan: ${image.name}`}
            className="mb-2 rounded-lg max-w-full h-1/4"
          />
          <p className="text-sm font-semibold">Name: {image.name}</p>
          <p className="text-xs">Bio: {image.bio}</p>
        </div>
      ))}
    </div>
  );
}
