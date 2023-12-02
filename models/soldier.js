const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const soldierSchema = new Schema({
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
    bio: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Soldier', soldierSchema);