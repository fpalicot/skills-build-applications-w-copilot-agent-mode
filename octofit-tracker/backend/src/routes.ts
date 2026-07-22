import { Router } from 'express';
import { User, Team, Activity, LeaderboardEntry, Workout } from './models';

const router = Router();

router.get('/api/users', async (_req, res) => {
  const users = await User.find({}).lean();
  res.json(users);
});

router.get('/api/teams', async (_req, res) => {
  const teams = await Team.find({}).lean();
  res.json(teams);
});

router.get('/api/activities', async (_req, res) => {
  const activities = await Activity.find({}).lean();
  res.json(activities);
});

router.get('/api/leaderboard', async (_req, res) => {
  const entries = await LeaderboardEntry.find({}).lean();
  res.json(entries);
});

router.get('/api/workouts', async (_req, res) => {
  const workouts = await Workout.find({}).lean();
  res.json(workouts);
});

export default router;
