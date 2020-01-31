const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
	workout: { type: Object },
	time: {
		start: { type: Date },
		stop: { type: Date }
	},
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

const History = mongoose.model("History", historySchema);

module.exports = History;
