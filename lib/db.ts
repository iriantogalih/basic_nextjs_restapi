import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log('Database is already connected');
    return;
  }

  if (connectionState === 2) {
    console.log('Connecting to database');
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI!, {
      dbName: 'next14restapi',
      bufferCommands: true,
    });

    console.log('Database connected');
  }catch (err: any) {
    console.log('Database connection error', err);
    throw new Error('Error', err)
  }
}

export default connect;
