const mongoose = require("mongoose");
const Excercise = require("./exercise");

exercises = [
	{
		name: "bench press",
		difficulty: "beginner",
		type: "barbell",
		muscle: "chest",
		description:
			"The barbell bench press is an upper body pressing drill that builds size and strength in the upper body, specifically in the chest, triceps, and shoulders. Lying flat on a bench allows for improved stability. The exercise allows for the greatest amount of weight to used, which makes it ideal for building strength, size, and power.",
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
		muscle: "legs",
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
