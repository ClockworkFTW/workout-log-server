const workoutRouter = require("express").Router();
const Workout = require("../models/workout");

// Token verification middleware
const verifyToken = require("../util");
workoutRouter.use(verifyToken);

// Fetch all workouts
workoutRouter.get("/", async (req, res) => {
	try {
		const workouts = await Workout.find({ user: req.user.id }).populate(
			"exercises.exercise"
		);
		res.status(200).json(workouts);
	} catch (error) {
		res.status(400).json({ error });
	}
});

// Create new workout
workoutRouter.post("/", async (req, res) => {
	try {
		const workout = new Workout(req.body);
		workout.user = req.user.id;
		await workout.save();
		const newWorkout = await Workout.findById(workout._id).populate(
			"exercises.exercise"
		);
		res.status(200).json(newWorkout);
	} catch (error) {
		res.status(400).json({
			message:
				"We're sorry, the workout could not be created. Please try again!"
		});
	}
});

// Update existing workout
workoutRouter.put("/:id", async (req, res) => {
	try {
		const id = req.params.id;

		const updatedWorkout = await Workout.findByIdAndUpdate(id, req.body, {
			new: true
		}).populate("exercises.exercise");

		res.status(200).json(updatedWorkout);
	} catch (error) {
		res.status(400).json({ error });
	}
});

module.exports = workoutRouter;
