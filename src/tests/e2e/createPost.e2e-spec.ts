import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/auth/login', { waitUntil: 'networkidle' });

  await page.getByLabel('E-mail').fill('test@test.com');
  await page.getByLabel('Senha').fill('Test.123');

  await page.getByRole('button', { name: 'Salvar' }).click();
});

test('createPost', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  await expect(page.getByText('Criar')).toBeVisible();
});
