const workoutRouter = require("express").Router();
const Workout = require("../models/workout");

// Token verification middleware
const verifyToken = require("../util");
workoutRouter.use(verifyToken);

// Fetch all workouts
workoutRouter.get("/", async (req, res) => {
	try {
		const workouts = await Workout.find({ user: req.user.id });
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
		res.status(200).json(workout);
	} catch (error) {
		res.status(400).json({ error });
	}
});

module.exports = workoutRouter;
