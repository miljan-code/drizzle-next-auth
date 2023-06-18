import type { Config } from 'drizzle-kit';
import 'dotenv/config';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is missing');
}

export default {
  schema: './db/schema.ts',
  out: './db/migrations',
  connectionString: process.env.DATABASE_URL,
} satisfies Config;
