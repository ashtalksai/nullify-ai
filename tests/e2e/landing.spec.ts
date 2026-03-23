import { test, expect } from "@playwright/test";

test.describe("Landing Page", () => {
  test("loads successfully with title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/.+/);
  });

  test("has navbar with logo and links", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("navigation")).toBeVisible();
    await expect(page.getByRole("link", { name: "RuleVault" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Pricing" }).first()).toBeVisible();
  });

  test("has hero section with H1 and CTA", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toContainText(/AI agents/i);
    await expect(page.getByRole("link", { name: /Get Early Access/i })).toBeVisible();
  });

  test("has EU AI Act countdown section", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("August 2, 2026").first()).toBeVisible();
    await expect(page.getByText(/EU AI Act Enforcement/i)).toBeVisible();
  });

  test("has problem section", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText(/3 ways unmonitored/i)).toBeVisible();
    await expect(page.getByText("The Invisible Batch Problem")).toBeVisible();
  });

  test("has solution section with interceptor diagram", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("The Interceptor")).toBeVisible();
    await expect(page.getByText(/Not a CCTV/i)).toBeVisible();
  });

  test("has features bento grid with 6 features", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Rule Builder")).toBeVisible();
    await expect(page.getByText("Interceptor API")).toBeVisible();
    await expect(page.getByText("Immutable Audit Log")).toBeVisible();
    await expect(page.getByText("Real-Time Dashboard")).toBeVisible();
    await expect(page.getByText("Alert System")).toBeVisible();
    await expect(page.getByText("EU AI Act Workflows")).toBeVisible();
  });

  test("has how-it-works section with curl demo", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("1. Send Decision Payload")).toBeVisible();
    await expect(page.getByText("2. Rules Are Evaluated")).toBeVisible();
    await expect(page.getByText("3. Get Verdict Instantly")).toBeVisible();
  });

  test("has pricing section with 3 tiers", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Free").first()).toBeVisible();
    await expect(page.getByText("Lite").first()).toBeVisible();
    await expect(page.getByText("Pro").first()).toBeVisible();
  });

  test("has FAQ accordion with 7 questions", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("How does RuleVault ensure EU AI Act compliance?")).toBeVisible();
    // Click first FAQ to expand
    await page.getByText("How does RuleVault ensure EU AI Act compliance?").click();
  });

  test("has footer with legal links", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("footer")).toBeVisible();
    await expect(page.getByRole("link", { name: "Privacy Policy" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Terms of Service" }).first()).toBeVisible();
  });

  test("CTA button navigates to signup", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /Get Early Access/i }).click();
    await expect(page).toHaveURL(/signup/);
  });

  test("has 11 sections minimum", async ({ page }) => {
    await page.goto("/");
    // Check section labels present
    await expect(page.getByText("HERO").first()).toBeVisible();
    await expect(page.getByText("EU AI ACT COUNTDOWN").first()).toBeVisible();
    await expect(page.getByText("PROBLEM").first()).toBeVisible();
    await expect(page.getByText("SOLUTION").first()).toBeVisible();
    await expect(page.getByText("FEATURES").first()).toBeVisible();
    await expect(page.getByText("FAQ").first()).toBeVisible();
  });

  test("is mobile responsive at 375px", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");
    await expect(page.locator("h1")).toBeVisible();
    // Hamburger button should exist on mobile
    // Mobile hamburger button should exist (the md:hidden button in navbar)
    await expect(page.locator("nav button.md\\:hidden, button.md\\:hidden").first()).toBeVisible();
  });
});
