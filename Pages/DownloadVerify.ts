import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('Verify file download in folder', async ({ page }) => {
  // 1. Define your target download folder and file setup
  const downloadFolder = path.join(__dirname, 'my-downloads');
  
  // 2. Start waiting for the download event
  const downloadPromise = page.waitForEvent('download');

  // 3. Trigger the download action
  await page.getByRole('button', { name: 'Download PDF' }).click();
  const download = await downloadPromise;

  // 4. Get the filename and define the final destination path
  const fileName = download.suggestedFilename();
  const filePath = path.join(downloadFolder, fileName);

  // 5. Save the file to your custom folder
  // (This automatically waits for the download stream to finish completely)
  await download.saveAs(filePath);

  // 6. Check if the file exists in the folder
  const fileExists = fs.existsSync(filePath);
  
  // 7. Make your assertion
  expect(fileExists).toBe(true);
  
  // Optional: Verify the file is not empty
  const stats = fs.statSync(filePath);
  expect(stats.size).toBeGreaterThan(0);

//============================================================================

const downloadPromise = page.waitForEvent('download');
await page.getByRole('button', { name: 'Download PDF' }).click();
const download = await downloadPromise;

// Wait for the download process to finish completely
const tempPath = await download.path(); 

// Verify the temporary file exists in Playwright's default download folder
if (tempPath && fs.existsSync(tempPath)) {
  console.log(`File successfully downloaded to temporary path: ${tempPath}`);
}


});
