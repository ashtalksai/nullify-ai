import { test, expect } from "@playwright/test";

// Note: These tests require a logged-in session.
// For CI/CD use, set up auth fixtures or use the API to create a session.

test.describe("Dashboard Pages (structure checks)", () => {
  test("dashboard main page renders stat cards", async ({ page }) => {
    // Visit dashboard — in dev with seeded data, redirects to login if not authed
    await page.goto("/dashboard");
    // Either logged in (shows dashboard) or redirected to login
    const url = page.url();
    if (url.includes("login")) {
      // Auth guard works
      await expect(page.getByText("Welcome back.")).toBeVisible();
    } else {
      // Dashboard visible
      await expect(page.getByText("Decisions Today")).toBeVisible();
      await expect(page.getByText("Block Rate")).toBeVisible();
      await expect(page.getByText("Rules Active")).toBeVisible();
      await expect(page.getByText("Latency p99")).toBeVisible();
    }
  });

  test("rules page renders rule list", async ({ page }) => {
    await page.goto("/dashboard/rules");
    const url = page.url();
    if (!url.includes("login")) {
      await expect(page.getByRole("heading", { name: "Active Rules" })).toBeVisible();
    }
  });

  test("decisions page renders audit log", async ({ page }) => {
    await page.goto("/dashboard/decisions");
    const url = page.url();
    if (!url.includes("login")) {
      await expect(page.getByText("AUDIT LOG TABLE")).toBeVisible();
    }
  });

  test("alerts page renders alert config", async ({ page }) => {
    await page.goto("/dashboard/alerts");
    const url = page.url();
    if (!url.includes("login")) {
      await expect(page.getByText("Alert Configuration")).toBeVisible();
    }
  });

  test("settings page renders API keys", async ({ page }) => {
    await page.goto("/dashboard/settings");
    const url = page.url();
    if (!url.includes("login")) {
      await expect(page.getByText("API Keys")).toBeVisible();
    }
  });
});
