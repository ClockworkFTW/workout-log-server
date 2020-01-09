const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
	name: { type: String, required: true },
	difficulty: { type: String, required: true },
	category: { type: String, required: true },
	bodypart: { type: String, required: true },
	default: { type: Boolean, default: false },
	description: { type: String },
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
