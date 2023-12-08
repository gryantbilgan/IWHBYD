import React, { useState } from "react";
import { createImage } from "../../utilities/spartans-api";
import { useNavigate } from "react-router-dom";

export default function CreateImageComponent() {
  const navigate = useNavigate();
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
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleClick = async (event) => {
    event.preventDefault();
    setLoading(true);
    await createImageApiCall();
    setLoading(false);
    setFormSubmitted(true);
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

  const resetForm = () => {
    setFormSubmitted(false);
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

  return (
    <div className="flex items-center justify-center h-full">
      <div
        className="form-container bg-black p-2 rounded shadow-md w-full max-w-md flex flex-col items-center"
        style={{ maxHeight: "1000px", maxWidth: "500px", margin: "auto" }}
      >
        <button
          className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-6"
          onClick={() => navigate("/")}
        >
          Spartans
        </button>
        <div style={{ display: formSubmitted ? "none" : "block" }}>
          <form autoComplete="off">
            <div className="mb-1">
              <label className="block text-white text-sm font-bold mb-2">
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange}
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-1">
              <label className="block text-white text-sm font-bold mb-2">
                Hair Color:
              </label>
              <select
                name="hair"
                value={input.hair}
                onChange={handleChange}
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="Blonde">Blonde</option>
                <option value="Brown">Brown</option>
                <option value="Black">Black</option>
                <option value="Grey">Grey</option>
              </select>
            </div>
            <div className="mb-1">
              <label className="block text-white text-sm font-bold mb-2">
                Hair Length:
              </label>
              <select
                name="hairLength"
                value={input.hairLength}
                onChange={handleChange}
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="Long">Long</option>
                <option value="Short">Short</option>
                <option value="Buzzed">Buzzed</option>
                <option value="Bald">Bald</option>
              </select>
            </div>
            <div className="mb-1">
              <label className="block text-white text-sm font-bold mb-2">
                Eye Color:
              </label>
              <select
                name="eye"
                value={input.eye}
                onChange={handleChange}
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Brown">Brown</option>
                <option value="Yellow">Yellow</option>
                <option value="Red">Red</option>
                <option value="Orange">Orange</option>
              </select>
            </div>
            <div className="mb-1">
              <label className="block text-white text-sm font-bold mb-2">
                Armor Type:
              </label>
              <select
                name="armor"
                value={input.armor}
                onChange={handleChange}
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="Mark-IV">Mark-IV</option>
                <option value="Mark-V">Mark-V</option>
                <option value="Mark-VI">Mark-VI</option>
                <option value="Mark-VII">Mark-VII</option>
              </select>
            </div>
            <div className="mb-1">
              <label className="block text-white text-sm font-bold mb-2">
                Armor Color:
              </label>
              <select
                name="armorColor"
                value={input.armorColor}
                onChange={handleChange}
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="Blue">Blue</option>
                <option value="Red">Red</option>
              </select>
            </div>
            <div className="mb-1">
              <label className="block text-white text-sm font-bold mb-2">
                Bio:
              </label>
              <textarea
                name="bio"
                value={input.bio}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <button
              className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleClick}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-l-4 border-r-4 border-lime-500"></div>
                </div>
              ) : (
                "Render"
              )}
            </button>
          </form>
        </div>
        {formSubmitted && (
          <>
            <div className="mb-1">
              <img
                src={image}
                style={{ maxWidth: "256px", maxHeight: "256px" }}
                alt="Generated Spartan"
              />
            </div>
            <div className="mb-1">
              <p className="text-white">Name: {input.name}</p>
              <p className="text-white">Bio: {input.bio}</p>
            </div>
            <button
              className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={resetForm}
            >
              Create New Spartan
            </button>
          </>
        )}
      </div>
    </div>
  );
}
