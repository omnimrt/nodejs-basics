// src/db/initMongoDB.js
import mongoose from 'mongoose';
import { env } from '../utils/env.js';
import { ENV_VARS } from '../constants/index.js';

export const initMongoDB = async () => {
  try {
    const user = env(ENV_VARS.MONGODB_USER);
    const pwd = env(ENV_VARS.MONGODB_PASSWORD);
    const url = env(ENV_VARS.MONGODB_URL);
    const db = env(ENV_VARS.MONGODB_DB);

    const connectionLink = `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`;
    await mongoose.connect(connectionLink);
    console.log('Mongo connection successfully established!');
  } catch (e) {
    console.log('Error while setting up mongo connection', e);
    throw e;
  }
};
