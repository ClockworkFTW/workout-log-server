const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
	name: { type: String, required: true },
	difficulty: { type: String, required: true },
	type: { type: String, required: true },
	muscle: { type: String, required: true },
	default: { type: Boolean, default: false },
	instructions: [{ type: String }],
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
