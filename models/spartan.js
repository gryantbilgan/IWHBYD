const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const spartanSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      // required: true
    },
    name: {
      type: String,
      // required: true
    },
    hair: {
      type: String,
      enum: ["Blonde", "Brown", "Black", "Grey"],
      // required: true
    },
    hairLength: {
      type: String,
      enum: ["Long", "Short", "Buzzed", "Bald"],
    },
    eye: {
      type: String,
      enum: ["Blue", "Green", "Brown", "Yellow", "Red", "Orange"],
      // required: true
    },
    armor: {
      type: String,
      enum: ["Mark-IV", "Mark-V", "Mark-VI", "Mark-VII"],
      // required: true
    },
    armorColor: {
      type: String,
      enum: ["Blue", "Red"],
      // required: true
    },
    bio: {
      type: String,
      // required: true
    },
    imageUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Spartan", spartanSchema);
