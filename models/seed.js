const mongoose = require("mongoose");
const Excercise = require("./exercise");

exercises = [
	{
		name: "bench press",
		difficulty: "beginner",
		category: "barbell",
		bodypart: "chest",
		description:
			"The barbell bench press is an upper body pressing drill that builds size and strength in the upper body, specifically in the chest, triceps, and shoulders. Lying flat on a bench allows for improved stability. The exercise allows for the greatest amount of weight to used, which makes it ideal for building strength, size, and power.",
		default: true
	},
	{
		name: "incline bench press",
		difficulty: "beginner",
		category: "barbell",
		bodypart: "chest",
		default: true
	},
	{
		name: "decline bench press",
		difficulty: "beginner",
		category: "barbell",
		bodypart: "chest",
		default: true
	},
	{
		name: "bench press",
		difficulty: "beginner",
		category: "dumbell",
		bodypart: "chest",
		default: true
	},
	{
		name: "incline press",
		difficulty: "beginner",
		category: "dumbell",
		bodypart: "chest",
		default: true
	},
	{
		name: "decline press",
		difficulty: "beginner",
		category: "dumbell",
		bodypart: "chest",
		default: true
	},
	{
		name: "fly",
		difficulty: "beginner",
		category: "dumbell",
		bodypart: "chest",
		default: true
	},
	{
		name: "squat",
		difficulty: "intermediate",
		category: "barbell",
		bodypart: "quadriceps",
		default: true
	},
	{
		name: "deadlift",
		difficulty: "advanced",
		category: "barbell",
		bodypart: "quadriceps",
		default: true
	},
	{
		name: "leg curl",
		difficulty: "beginner",
		category: "machine",
		bodypart: "legs",
		default: true
	},
	{
		name: "leg extension",
		difficulty: "beginner",
		category: "machine",
		bodypart: "quadriceps",
		default: true
	},
	{
		name: "calf raise",
		difficulty: "beginner",
		category: "machine",
		bodypart: "calves",
		default: true
	},
	{
		name: "military press",
		difficulty: "intermediate",
		category: "barbell",
		bodypart: "deltoids",
		default: true
	},
	{
		name: "shoulder press",
		difficulty: "beginner",
		category: "dumbbell",
		bodypart: "deltoids",
		default: true
	},
	{
		name: "front lateral raise",
		difficulty: "beginner",
		category: "dumbbell",
		bodypart: "deltoids",
		default: true
	},
	{
		name: "side lateral raise",
		difficulty: "beginner",
		category: "dumbbell",
		bodypart: "deltoids",
		default: true
	},
	{
		name: "reverse fly",
		difficulty: "beginner",
		category: "dumbbell",
		bodypart: "deltoids",
		default: true
	},
	{
		name: "bicep curl",
		difficulty: "beginner",
		category: "barbell",
		bodypart: "biceps",
		default: true
	},
	{
		name: "bicep curl",
		difficulty: "beginner",
		category: "dumbbell",
		bodypart: "biceps",
		default: true
	},
	{
		name: "skull crushers",
		difficulty: "beginner",
		category: "barbell",
		bodypart: "triceps",
		default: true
	},
	{
		name: "triceps pushdowns",
		difficulty: "beginner",
		category: "cable",
		bodypart: "triceps",
		default: true
	},
	{
		name: "lunges",
		difficulty: "beginner",
		category: "dumbbell",
		bodypart: "quadriceps",
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
