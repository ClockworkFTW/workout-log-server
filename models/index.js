const mongoose = require("mongoose");

const seedDb = require("./seed");

const dbConnect = async () => {
	try {
		await mongoose.connect("mongodb://localhost:27017/workout-dev", {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log("Connected to mongodb");
		await seedDb();
	} catch (error) {
		console.log(error);
	}
};

module.exports = dbConnect;
