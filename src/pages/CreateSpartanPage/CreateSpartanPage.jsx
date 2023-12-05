import React from "react";
// import { useState } from "react";
// import * as spartansAPI from "../../utilities/spartans-api";
import CreateImageComponent from "../../components/CreateImageComponent/CreateImageComponent";

export default function CreateSpartanPage() {
  // const [newSpartan, setNewSpartan] = useState({
  //   name: "",
  //   hair: "Blonde",
  //   hairLength: "Long",
  //   eye: "Blue",
  //   armor: "Mark IV",
  //   armorColor: "Blue",
  //   bio: "",
  // });

  // const handleChange = (event) => {
  //   setNewSpartan({ ...newSpartan, [event.target.name]: event.target.value });
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     await spartansAPI.createSpartan(newSpartan);
  //   } catch (error) {
  //     console.log("Error creating Spartan:", error);
  //   }
  // };
  return (
    <div className="flex flex-col items-center">
      {/* <h1>New Spartan</h1>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="flex flex-col gap-1"
      >
        <div className="flex items-center gap-2">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newSpartan.name}
            onChange={handleChange}
            required
            className="border p-2"
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="hair">Hair Color:</label>
          <select name="hair" id="hair" required className="border p-2">
            <option value="Blonde">Blonde</option>
            <option value="Brown">Brown</option>
            <option value="Black">Black</option>
            <option value="Grey">Grey</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="hairLength">Hair Length:</label>
          <select
            name="hairLength"
            id="hairLength"
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
          <label htmlFor="eye">Eye Color:</label>
          <select name="eye" id="eye" required className="border p-2">
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Brown">Brown</option>
            <option value="Yellow">Yellow</option>
            <option value="Red">Red</option>
            <option value="Orange">Orange</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="armor">Armor Type:</label>
          <select name="armor" id="armor" required className="border p-2">
            <option value="Mark IV">Mark IV</option>
            <option value="Mark V">Mark V</option>
            <option value="Mark VI">Mark VI</option>
            <option value="Mark VII">Mark VII</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="armorColor">Armor Color:</label>
          <select
            name="armorColor"
            id="armorColor"
            required
            className="border p-2"
          >
            <option value="Blue">Blue</option>
            <option value="Red">Red</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="bio">Bio:</label>
          <textarea name="bio" id="bio"></textarea>
        </div>
        <button
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-2"
          type="submit"
        >
          Create Spartan
        </button>
      </form> */}
      <CreateImageComponent />
    </div>
  );
}
