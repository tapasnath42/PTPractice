import { test, expect } from "@playwright/test";

test("", async ({ page }) => {

    //1. The Global Event Listener (page.on)

    //  Use this pattern if you want to log or monitor any download that happens dynamically during the lifecycle of your page.
    // Register the listener to capture any download event
    page.on('download', async (download) => {
        console.log(`Download started: ${download.url()}`);

        // Wait for the download process to complete
        const path = await download.path();
        console.log(`Temporary file saved at: ${path}`);

        // Save the file to a permanent location
        await download.saveAs('./downloads/' + download.suggestedFilename());
    });

    // Trigger an action that starts a download
    await page.getByRole('button', { name: 'Export Data' }).click();


    //============================================================================


    //Use page.waitForEvent('download') instead
    //Just like with the popup event, using page.on('download') immediately before a click can cause race conditions if the download starts faster than the JavaScript listener registers.
    //For standard end-to-end tests where you know exactly which click triggers a download, the recommended pattern is to initialize the event promise before the action, and then await it:

    // 1. Start waiting for the download event (Do NOT 'await' this line yet)
    const downloadPromise = page.waitForEvent('download');

    // 2. Trigger the action that starts the download
    await page.getByRole('link', { name: 'Download Invoice' }).click();

    // 3. Await the promise to get the Download object instance
    const download = await downloadPromise;

    // 4. Assert and handle the downloaded file
    console.log(download.suggestedFilename()); // e.g., "invoice-2026.pdf"
    await download.saveAs('/path/to/save/' + download.suggestedFilename());



});