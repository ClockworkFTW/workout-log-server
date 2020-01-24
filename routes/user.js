const userRouter = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const Measurement = require("../models/measurement");
const config = require("../config");

userRouter.post("/signup", async (req, res) => {
	const { username, email, birthday, passwordOne, passwordTwo } = req.body;

	if (passwordOne !== passwordTwo) {
		return res.status(400).json({ error: "Passwords must match" });
	}

	try {
		const password = await bcrypt.hash(passwordOne, 10);

		const user = new User({
			username,
			email,
			birthday,
			password
		});

		await user.save();

		const measurements = new Measurement({
			sections: config.measurements.map(measurement => ({
				id: measurement,
				data: [
					{
						x: "2020-01-05",
						y: 191
					},
					{
						x: "2020-01-06",
						y: 192
					},
					{
						x: "2020-01-07",
						y: 190
					},
					{
						x: "2020-01-08",
						y: 192
					},
					{
						x: "2020-01-09",
						y: 193
					}
				]
			})),
			user: user._id
		});

		await measurements.save();

		const payload = {
			id: user.id,
			username: user.username,
			email: user.email
		};

		const token = jwt.sign(payload, "secret");

		res.status(200).json({ token, ...payload });
	} catch (error) {
		res.status(400).json({ error });
	}
});

userRouter.post("/signin", async (req, res) => {
	const { username, password } = req.body;

	try {
		const user = await User.findOne({ username });

		if (!user) {
			return res.status(400).json({ error: "Invalid username" });
		}

		const match = await bcrypt.compare(password, user.password);

		if (!match) {
			return res.status(400).json({ error: "Invalid password" });
		}

		const payload = {
			id: user.id,
			username: user.username,
			email: user.email
		};

		const token = jwt.sign(payload, "secret");

		res.status(200).json({ token, ...payload });
	} catch (error) {
		res.status(400).json({ error });
	}
});

module.exports = userRouter;
