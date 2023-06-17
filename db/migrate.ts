import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import 'dotenv/config';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL env variable is not set!');
}

const connectionString = process.env.DATABASE_URL;
const client = postgres(connectionString, { max: 1 });

const main = async () => {
  console.log('⏳ Running migrations...');
  const start = Date.now();

  await migrate(drizzle(client), { migrationsFolder: 'db/migrations' });
  await client.end();

  const end = Date.now();
  console.log(`✅ Migrations completed in ${end - start}ms`);
  process.exit(0);
};

main().catch(err => {
  console.error('❌ Migration failed');
  console.error(err);
  process.exit(1);
});
