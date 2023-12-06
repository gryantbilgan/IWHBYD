import React, { useState } from "react";
import { createImage } from "../../utilities/spartans-api";

export default function CreateImageComponent() {
  const [image, setImage] = useState("");
  const [input, setInput] = useState({
    name: "",
    hair: "Blonde",
    hairLength: "Long",
    eye: "Blue",
    armor: "Mark-IV",
    armorColor: "Blue",
    bio: "",
  });
  // const [prompt, setPrompt] = useState('')

  // useEffect(() => {
  //   createImageApiCall();
  // }, [prompt]);

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleClick = (event) => {
    event.preventDefault();
    createImageApiCall();
    setInput({
      name: "",
      hair: "Blonde",
      hairLength: "Long",
      eye: "Blue",
      armor: "Mark-IV",
      armorColor: "Blue",
      bio: "",
    });
  };

  const createImageApiCall = async () => {
    try {
      const imageData = {
        description: input,
        // Add other properties as needed
      };

      const result = await createImage(imageData);
      console.log(result);
      // const imageUrl = result.data[0].url;
      // console.log(imageUrl);
      setImage(result.imageUrl);
      console.log("Image created successfully:", result);
    } catch (error) {
      console.error("Error creating image:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form autoComplete="off" className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
            required
            className="border p-"
          />
        </div>
        <div className="flex items-center gap-2">
          <label>Hair Color:</label>
          <select
            name="hair"
            value={input.hair}
            onChange={handleChange}
            required
            className="border p-2"
          >
            <option value="Blonde">Blonde</option>
            <option value="Brown">Brown</option>
            <option value="Black">Black</option>
            <option value="Grey">Grey</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label>Hair Length:</label>
          <select
            name="hairLength"
            value={input.hairLength}
            onChange={handleChange}
            required
            className="border p-2"
          >
            <option value="Long">Long</option>
            <option value="Short">Short</option>
            <option value="Buzzed">Buzzed</option>
            <option value="Bald">Bald</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label>Eye Color:</label>
          <select
            name="eye"
            value={input.eye}
            onChange={handleChange}
            required
            className="border p-2"
          >
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Brown">Brown</option>
            <option value="Yellow">Yellow</option>
            <option value="Red">Red</option>
            <option value="Orange">Orange</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label>Armor Type:</label>
          <select
            name="armor"
            value={input.armor}
            onChange={handleChange}
            required
            className="border p-2"
          >
            <option value="Mark-IV">Mark-IV</option>
            <option value="Mark-V">Mark-V</option>
            <option value="Mark-VI">Mark-VI</option>
            <option value="Mark-VII">Mark-VII</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label>Armor Color:</label>
          <select
            name="armorColor"
            value={input.armorColor}
            onChange={handleChange}
            required
            className="border p-2"
          >
            <option value="Blue">Blue</option>
            <option value="Red">Red</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label>Bio:</label>
          <textarea
            name="bio"
            value={input.bio}
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
      <p className="text-white">Create Image Component</p>
      <img 
        src={image}
        style={{ maxWidth: "300px", maxHeight: "300px"}} />
      {/* <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter Your Prompt"
      /> */}
      {/* Add your button content and functionality here */}
      <button
        className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-2 mt-5"
        onClick={handleClick}
      >
        Render
      </button>
    </div>
  );
}
