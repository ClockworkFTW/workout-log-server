const mongoose = require("mongoose");
const Excercise = require("./exercise");

exercises = [
	{
		name: "bench press",
		difficulty: "beginner",
		type: "barbell",
		muscle: "chest",
		instructions: [
			"Position yourself with your back down on a flat bench placing the hands up on the bar using an underhand grip slightly wider than shoulder width apart.",
			"After taking a deep breath in, extend the elbows and lift the bar up off the rack until elbows are extended but not locked. Pause for a brief movement as you fully extend your breath.",
			"Lower the weight directly down to the chest as you breath inwards, keeping the movement pattern slow and steady.",
			"Once just above the chest, pause, and then press directly up again, exhaling your breath.",
			"Continue until all reps are completed and then re-rack the barbell."
		],
		default: true
	},
	{
		name: "incline bench press",
		difficulty: "beginner",
		type: "barbell",
		muscle: "chest",
		default: true
	},
	{
		name: "decline bench press",
		difficulty: "beginner",
		type: "barbell",
		muscle: "chest",
		default: true
	},
	{
		name: "bench press",
		difficulty: "beginner",
		type: "dumbell",
		muscle: "chest",
		default: true
	},
	{
		name: "incline press",
		difficulty: "beginner",
		type: "dumbell",
		muscle: "chest",
		default: true
	},
	{
		name: "decline press",
		difficulty: "beginner",
		type: "dumbell",
		muscle: "chest",
		default: true
	},
	{
		name: "fly",
		difficulty: "beginner",
		type: "dumbell",
		muscle: "chest",
		default: true
	},
	{
		name: "squat",
		difficulty: "intermediate",
		type: "barbell",
		muscle: "quadriceps",
		default: true
	},
	{
		name: "deadlift",
		difficulty: "advanced",
		type: "barbell",
		muscle: "quadriceps",
		default: true
	},
	{
		name: "leg curl",
		difficulty: "beginner",
		type: "machine",
		muscle: "hamstrings",
		default: true
	},
	{
		name: "leg extension",
		difficulty: "beginner",
		type: "machine",
		muscle: "quadriceps",
		default: true
	},
	{
		name: "calf raise",
		difficulty: "beginner",
		type: "machine",
		muscle: "calves",
		default: true
	},
	{
		name: "military press",
		difficulty: "intermediate",
		type: "barbell",
		muscle: "deltoids",
		default: true
	},
	{
		name: "shoulder press",
		difficulty: "beginner",
		type: "dumbbell",
		muscle: "deltoids",
		default: true
	},
	{
		name: "front lateral raise",
		difficulty: "beginner",
		type: "dumbbell",
		muscle: "deltoids",
		default: true
	},
	{
		name: "side lateral raise",
		difficulty: "beginner",
		type: "dumbbell",
		muscle: "deltoids",
		default: true
	},
	{
		name: "reverse fly",
		difficulty: "beginner",
		type: "dumbbell",
		muscle: "deltoids",
		default: true
	},
	{
		name: "bicep curl",
		difficulty: "beginner",
		type: "barbell",
		muscle: "biceps",
		default: true
	},
	{
		name: "bicep curl",
		difficulty: "beginner",
		type: "dumbbell",
		muscle: "biceps",
		default: true
	},
	{
		name: "skull crushers",
		difficulty: "beginner",
		type: "barbell",
		muscle: "triceps",
		default: true
	},
	{
		name: "triceps pushdowns",
		difficulty: "beginner",
		type: "cable",
		muscle: "triceps",
		default: true
	},
	{
		name: "lunges",
		difficulty: "beginner",
		type: "dumbbell",
		muscle: "quadriceps",
		default: true
	}
];

const seedDb = async () => {
	await Excercise.collection.drop();

	exercises.forEach(async exercise => {
		const newExercise = new Excercise(exercise);
		await newExercise.save();
	});
};

module.exports = seedDb;
