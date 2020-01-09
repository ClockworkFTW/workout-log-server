const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
	name: { type: String, required: true },
	exercises: { type: Array, required: true },
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
