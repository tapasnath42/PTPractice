import * as XLSX from 'xlsx';

export type LoginTestData = {
  username: string;
  password: string;
};

export function readLoginData(filePath: string, sheetName: string): LoginTestData[] {
  const workbook = XLSX.readFile(filePath);
  const worksheet = workbook.Sheets[sheetName];

  if (!worksheet) {
    throw new Error(`Worksheet "${sheetName}" was not found in ${filePath}.`);
  }

  const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(worksheet, { defval: '' });

  if (rows.length === 0) {
    throw new Error(`Worksheet "${sheetName}" does not contain any login rows.`);
  }

  return rows.map((row, index) => {
    const username = row.username;
    const password = row.password;

    if (typeof username !== 'string' || !username.trim()) {
      throw new Error(`Row ${index + 2} must contain a username.`);
    }

    if (typeof password !== 'string' || !password.trim()) {
      throw new Error(`Row ${index + 2} must contain a password.`);
    }

    return { username: username.trim(), password: password.trim() };
  });
}