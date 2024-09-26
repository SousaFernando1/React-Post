import { test } from '@playwright/test';

test('sign in successfully', async ({ page }) => {
  await page.goto('/auth/login', { waitUntil: 'networkidle' });

  await page.getByLabel('E-mail').fill('test@test.com');
  await page.getByLabel('Senha').fill('Test.123');

  await page.getByRole('button', { name: 'Salvar' }).click();
});
