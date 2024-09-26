import { test as setup } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho para salvar o estado de autenticação
const authFile = path.join(__dirname, '../../playwright/.auth/user.json');

// Este teste será executado apenas para configurar a autenticação e salvar o estado
setup('auth setup', async ({ page }) => {
  await page.goto('/auth/login', { waitUntil: 'networkidle' });
  await page.getByLabel('E-mail').fill('test@test.com');
  await page.getByLabel('Senha').fill('Test.123');
  await page.getByRole('button', { name: 'Salvar' }).click();
  await page.context().storageState({ path: authFile });
});
