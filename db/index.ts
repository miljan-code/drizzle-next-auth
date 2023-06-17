import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import 'dotenv/config';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL env variable is not set!');
}

const connectionString = process.env.DATABASE_URL;
const client = postgres(connectionString);
export const db = drizzle(client);
