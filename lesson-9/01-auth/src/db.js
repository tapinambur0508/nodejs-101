import mongoose from 'mongoose';

async function initDBConnection() {
  try {
    const DB_URI = process.env.DB_URI;

    await mongoose.connect(DB_URI);

    console.log('Database connection successfully');
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { initDBConnection };
