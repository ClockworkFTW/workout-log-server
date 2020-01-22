const measurementRouter = require("express").Router();
const Measurement = require("../models/measurement");

// Token verification middleware
const verifyToken = require("../util");
measurementRouter.use(verifyToken);

// Fetch user measurements
measurementRouter.get("/", async (req, res) => {
	try {
		const measurements = await Measurement.findOne({ user: req.user.id });

		res.status(200).json(measurements);
	} catch (error) {
		res.status(400).json({ error });
	}
});

// Update user measurements
measurementRouter.put("/", async (req, res) => {
	try {
		const measurements = await Measurement.findByIdAndUpdate(
			{ user: req.user.id },
			req.body,
			{ new: true }
		);

		res.status(200).json(measurements);
	} catch (error) {
		res.status(400).json({ error });
	}
});

module.exports = measurementRouter;
