const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
	_id: false,
	x: { type: Date, default: new Date() },
	y: { type: Number }
});

const sectionSchema = new mongoose.Schema({
	_id: false,
	id: { type: String },
	data: [dataSchema]
});

const measurementSchema = new mongoose.Schema({
	sections: [sectionSchema],
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

const Measurement = mongoose.model("Measurement", measurementSchema);

module.exports = Measurement;
