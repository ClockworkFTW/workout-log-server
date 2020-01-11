const exerciseRouter = require("express").Router();
const Exercise = require("../models/exercise");

// Token verification middleware
const verifyToken = require("../util");
exerciseRouter.use(verifyToken);

// Fetch all exercises
exerciseRouter.get("/", async (req, res) => {
	try {
		const defaultExercises = await Exercise.find({ default: true });
		const customExercises = await Exercise.find({ user: req.user.id });
		const exercises = [...defaultExercises, ...customExercises];

		res.status(200).json(exercises);
	} catch (error) {
		res.status(400).json({ error });
	}
});

// Create new exercise
exerciseRouter.post("/", async (req, res) => {
	try {
		const exercise = new Exercise(req.body);
		await exercise.save();

		exercise.user = req.user.id;
		await exercise.save();

		res.status(200).json(exercise);
	} catch (error) {
		res.status(400).json({ error });
	}
});

// Update existing exercise
exerciseRouter.put("/:id", async (req, res) => {
	try {
		const id = req.params.id;

		const exercise = await Exercise.findByIdAndUpdate(id, req.body, {
			new: true
		});

		res.status(200).json(exercise);
	} catch (error) {
		res.status(400).json({ error });
	}
});

// Delete exercise
exerciseRouter.delete("/:id", async (req, res) => {
	try {
		const id = req.params.id;

		await Exercise.findByIdAndDelete(id);

		res.status(200).end();
	} catch (error) {
		res.status(400).json({ error });
	}
});

module.exports = exerciseRouter;
