const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spartanSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    hair: {
        type: String,
        enum: ["Blue", "Green", "Brown", "Yellow", "Red", "Orange"],
        required: true
    },
    hairLength: {
        type: String,
        enum: ["long", "short", "buzzed", "bald"]
    },
    eye: {
        type: String,
        enum: ["Blonde", "Brown", "Black", "Grey"],
        required: true
    },
    armor: {
        type: String,
        enum: ["Mark IV", "Mark V", "Mark VI", "Mark VII"],
        required: true
    },
    armorColor: {
        type: String,
        enum: ["Blue", "Red"],
        required: true
    },
    bio: {
        type: String,
        required: true
    }
} , {
    timestamps: true
});

module.exports = mongoose.model('Spartan', spartanSchema);