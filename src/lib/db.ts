import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI ?? '';
const MONGO_DB = process.env.MONGO_DB ?? 'portfolio';

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache ?? { conn: null, promise: null };
global.mongooseCache = cached;

export async function connectDb(): Promise<typeof mongoose> {
  if (!MONGO_URI) {
    throw new Error('MONGO_URI не задан');
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const uri = MONGO_URI.includes('/') && MONGO_URI.split('/').length > 3
      ? MONGO_URI
      : `${MONGO_URI.replace(/\/$/, '')}/${MONGO_DB}`;

    cached.promise = mongoose.connect(uri, { bufferCommands: false });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
