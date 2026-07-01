/**
 * Cria ou atualiza o usuário admin no Supabase Auth.
 * Requer SUPABASE_SERVICE_ROLE_KEY no .env (Dashboard > Settings > API).
 *
 * Uso: node scripts/seed-admin-user.mjs
 */
import { createClient } from '@supabase/supabase-js';
import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

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

const url = process.env.VITE_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const adminEmail = 'admin@ycorps.com.br';
const adminPassword = 'Ycoprs@2143';

if (!url || !serviceRoleKey) {
  console.error('Defina VITE_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY no arquivo .env');
  process.exit(1);
}

const supabase = createClient(url, serviceRoleKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const { data: users, error: listError } = await supabase.auth.admin.listUsers();

if (listError) {
  console.error('Erro ao listar usuários:', listError.message);
  process.exit(1);
}

const existing = users.users.find((user) => user.email === adminEmail);

if (existing) {
  const { error } = await supabase.auth.admin.updateUserById(existing.id, {
    password: adminPassword,
    email_confirm: true,
    user_metadata: { username: 'admin' },
  });

  if (error) {
    console.error('Erro ao atualizar admin:', error.message);
    process.exit(1);
  }

  console.log('Usuário admin atualizado e confirmado:', adminEmail);
} else {
  const { data, error } = await supabase.auth.admin.createUser({
    email: adminEmail,
    password: adminPassword,
    email_confirm: true,
    user_metadata: { username: 'admin' },
  });

  if (error) {
    console.error('Erro ao criar admin:', error.message);
    process.exit(1);
  }

  console.log('Usuário admin criado:', data.user?.email);
}

const { error: loginError } = await createClient(url, process.env.VITE_SUPABASE_ANON_KEY).auth.signInWithPassword({
  email: adminEmail,
  password: adminPassword,
});

if (loginError) {
  console.error('Login de teste falhou:', loginError.message);
  process.exit(1);
}

console.log('Login de teste OK. Use usuário "admin" e senha "Ycoprs@2143" em /app');
