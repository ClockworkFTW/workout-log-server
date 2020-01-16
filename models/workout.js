const mongoose = require("mongoose");

const exerciseSubSchema = new mongoose.Schema({
	exercise: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Exercise",
		required: true
	},
	sets: { type: Array, required: true },
	_id: false
});

const workoutSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String },
	exercises: [exerciseSubSchema],
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
