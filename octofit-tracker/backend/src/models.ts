import mongoose, { Schema, model, Model } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  role: string;
  teamId?: mongoose.Types.ObjectId;
}

export interface ITeam {
  name: string;
  sport: string;
  members: number;
  captain: string;
}

export interface IActivity {
  userId: mongoose.Types.ObjectId;
  type: string;
  duration: number;
  date: Date;
  calories: number;
}

export interface ILeaderboardEntry {
  userId: mongoose.Types.ObjectId;
  name: string;
  points: number;
  streak: number;
}

export interface IWorkout {
  title: string;
  difficulty: string;
  duration: number;
  focus: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  teamId: { type: Schema.Types.ObjectId, ref: 'Team' },
});

const teamSchema = new Schema<ITeam>({
  name: { type: String, required: true },
  sport: { type: String, required: true },
  members: { type: Number, required: true },
  captain: { type: String, required: true },
});

const activitySchema = new Schema<IActivity>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
  calories: { type: Number, required: true },
});

const leaderboardSchema = new Schema<ILeaderboardEntry>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  points: { type: Number, required: true },
  streak: { type: Number, required: true },
});

const workoutSchema = new Schema<IWorkout>({
  title: { type: String, required: true },
  difficulty: { type: String, required: true },
  duration: { type: Number, required: true },
  focus: { type: String, required: true },
});

export const User: Model<IUser> = mongoose.models.User || model<IUser>('User', userSchema);
export const Team: Model<ITeam> = mongoose.models.Team || model<ITeam>('Team', teamSchema);
export const Activity: Model<IActivity> = mongoose.models.Activity || model<IActivity>('Activity', activitySchema);
export const LeaderboardEntry: Model<ILeaderboardEntry> = mongoose.models.LeaderboardEntry || model<ILeaderboardEntry>('LeaderboardEntry', leaderboardSchema);
export const Workout: Model<IWorkout> = mongoose.models.Workout || model<IWorkout>('Workout', workoutSchema);
