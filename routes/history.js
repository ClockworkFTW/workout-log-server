const historyRouter = require("express").Router();
const History = require("../models/history");

// Token verification middleware
const verifyToken = require("../util");
historyRouter.use(verifyToken);

// Fetch history
historyRouter.get("/", async (req, res) => {
	try {
		const history = await History.find({ user: req.user.id });
		res.status(200).json(history);
	} catch (error) {
		res.status(400).json({ error });
	}
});

// Create new workout
historyRouter.post("/", async (req, res) => {
	try {
		console.log(req.body);
		const history = new History(req.body);
		history.user = req.user.id;
		await history.save();
		res.status(200).json(history);
	} catch (error) {
		res.status(400).json(error);
	}
});

module.exports = historyRouter;
