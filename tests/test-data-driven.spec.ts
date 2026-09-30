import path from 'path';
import { test } from '../Fixtures/Fixtures';
import { readLoginData } from '../utils/excelReader';

const workbookPath = path.resolve(__dirname, '../data/login-test-data.xlsx');
const loginData = readLoginData(workbookPath, 'LoginData');

for (const [index, credentials] of loginData.entries()) {
  test(`Login with workbook row ${index + 1}`, async ({ page, loginPage }) => {
    await page.goto(process.env.url as string);
    await loginPage.loginToApplication(credentials.username, credentials.password);
  });
}