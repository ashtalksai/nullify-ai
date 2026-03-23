import { test, expect } from "@playwright/test";

const viewports = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1280, height: 800 },
];

const publicPages = ["/", "/about", "/pricing", "/contact", "/privacy", "/terms"];

for (const vp of viewports) {
  test.describe(`Responsive @ ${vp.name} (${vp.width}px)`, () => {
    test.use({ viewport: { width: vp.width, height: vp.height } });

    for (const path of publicPages) {
      test(`${path} renders correctly`, async ({ page }) => {
        await page.goto(path);
        await expect(page.locator("body")).toBeVisible();
        // Check no horizontal overflow
        const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
        expect(scrollWidth).toBeLessThanOrEqual(vp.width + 50); // 50px tolerance for mobile
        // Check main content heading visible
        await expect(page.locator("h1, h2").first()).toBeVisible();
      });
    }

    test(`/ has footer at ${vp.name}`, async ({ page }) => {
      await page.goto("/");
      await expect(page.locator("footer")).toBeVisible();
    });
  });
}
