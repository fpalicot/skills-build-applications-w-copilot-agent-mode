"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const models_1 = require("../models");
const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await mongoose_1.default.connect(connectionString);
        console.log('Connected to octofit_db');
        await Promise.all([
            models_1.User.deleteMany({}),
            models_1.Team.deleteMany({}),
            models_1.Activity.deleteMany({}),
            models_1.LeaderboardEntry.deleteMany({}),
            models_1.Workout.deleteMany({}),
        ]);
        const createdUsers = await models_1.User.insertMany([
            { name: 'Ava Chen', email: 'ava@example.com', role: 'captain' },
            { name: 'Noah Singh', email: 'noah@example.com', role: 'member' },
            { name: 'Mina Patel', email: 'mina@example.com', role: 'member' },
        ]);
        const createdTeams = await models_1.Team.insertMany([
            { name: 'Rocket Squad', sport: 'running', members: 12, captain: 'Ava Chen' },
            { name: 'Peak Performers', sport: 'crossfit', members: 9, captain: 'Noah Singh' },
        ]);
        await models_1.User.updateMany({}, { $set: { teamId: createdTeams[0]._id } });
        await models_1.User.findByIdAndUpdate(createdUsers[1]._id, { teamId: createdTeams[1]._id });
        await models_1.User.findByIdAndUpdate(createdUsers[2]._id, { teamId: createdTeams[1]._id });
        await models_1.Activity.insertMany([
            {
                userId: createdUsers[0]._id,
                type: 'run',
                duration: 35,
                date: new Date('2026-07-20'),
                calories: 420,
            },
            {
                userId: createdUsers[1]._id,
                type: 'strength',
                duration: 45,
                date: new Date('2026-07-21'),
                calories: 510,
            },
            {
                userId: createdUsers[2]._id,
                type: 'cycle',
                duration: 30,
                date: new Date('2026-07-22'),
                calories: 340,
            },
        ]);
        await models_1.LeaderboardEntry.insertMany([
            { userId: createdUsers[0]._id, name: 'Ava Chen', points: 1420, streak: 7 },
            { userId: createdUsers[1]._id, name: 'Noah Singh', points: 1280, streak: 4 },
            { userId: createdUsers[2]._id, name: 'Mina Patel', points: 1185, streak: 5 },
        ]);
        await models_1.Workout.insertMany([
            { title: 'HIIT Cardio', difficulty: 'intermediate', duration: 25, focus: 'endurance' },
            { title: 'Core Blast', difficulty: 'beginner', duration: 20, focus: 'core' },
            { title: 'Power Lift', difficulty: 'advanced', duration: 40, focus: 'strength' },
        ]);
        console.log('Database seeding complete');
        await mongoose_1.default.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
