/**
 * Aplica as migrations do Supabase em ordem.
 * Requer SUPABASE_DB_PASSWORD no .env (Dashboard > Settings > Database).
 *
 * Uso: npm run db:apply
 */
import { readFileSync, existsSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, '../.env');

if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const [key, ...rest] = trimmed.split('=');
    if (key && !(key in process.env)) {
      process.env[key] = rest.join('=').replace(/^"|"$/g, '');
    }
  }
}

const password = process.env.SUPABASE_DB_PASSWORD;
const projectRef = 'fflzyvqatggbgdmvhoqd';

if (!password) {
  console.error('Defina SUPABASE_DB_PASSWORD no arquivo .env');
  console.error('Obtenha em: https://supabase.com/dashboard/project/fflzyvqatggbgdmvhoqd/settings/database');
  process.exit(1);
}

const connectionString =
  process.env.SUPABASE_DB_URL ??
  `postgresql://postgres:${encodeURIComponent(password)}@db.${projectRef}.supabase.co:5432/postgres`;

const migrationsDir = resolve(__dirname, '../supabase/migrations');
const migrationFiles = readdirSync(migrationsDir)
  .filter((file) => file.endsWith('.sql'))
  .sort();

const client = new pg.Client({ connectionString, ssl: { rejectUnauthorized: false } });

try {
  await client.connect();

  for (const file of migrationFiles) {
    const migrationPath = resolve(migrationsDir, file);
    const sql = readFileSync(migrationPath, 'utf8');
    await client.query(sql);
    console.log(`Migration aplicada: ${file}`);
  }

  const { rows } = await client.query(
    "SELECT public.authenticate_app_user('admin', 'Ycoprs@2143') AS result",
  );

  console.log('Todas as migrations foram aplicadas com sucesso.');
  console.log('Teste de login admin:', rows[0]?.result);
} catch (error) {
  console.error('Erro ao aplicar migrations:', error.message);
  process.exit(1);
} finally {
  await client.end();
}
