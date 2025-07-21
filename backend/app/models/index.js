import mongoose from "mongoose";
import tutorialModel from "./tutorial.model.js";
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;

// Get the connection string from .env
db.url = process.env.MONGO_URI;

db.tutorials = tutorialModel;

export default db;
