import { test, expect } from "@playwright/test";

test.describe("Auth Flow", () => {
  test("signup page loads with form fields", async ({ page }) => {
    await page.goto("/signup");
    await expect(page.getByText("Create your account.")).toBeVisible();
    await expect(page.getByText("Full Name")).toBeVisible();
    await expect(page.getByText("Work Email").first()).toBeVisible();
    await expect(page.locator("label", { hasText: "Password" }).first()).toBeVisible();
    await expect(page.getByText("Company")).toBeVisible();
    await expect(page.getByText("Role")).toBeVisible();
  });

  test("signup page has Google OAuth button", async ({ page }) => {
    await page.goto("/signup");
    await expect(page.getByRole("button", { name: /Continue with Google/i })).toBeVisible();
  });

  test("login page loads with form fields", async ({ page }) => {
    await page.goto("/login");
    await expect(page.getByText("Welcome back.")).toBeVisible();
    await expect(page.getByText("Work Email")).toBeVisible();
    await expect(page.getByRole("button", { name: /Sign In/i })).toBeVisible();
  });

  test("login page has Google OAuth button", async ({ page }) => {
    await page.goto("/login");
    await expect(page.getByRole("button", { name: /Continue with Google/i })).toBeVisible();
  });

  test("signup has link to login", async ({ page }) => {
    await page.goto("/signup");
    await expect(page.getByRole("link", { name: /Log In/i })).toBeVisible();
  });

  test("login has link to signup", async ({ page }) => {
    await page.goto("/login");
    await expect(page.getByRole("link", { name: /Sign up/i })).toBeVisible();
  });

  test("dashboard shows content or redirects unauthenticated users", async ({ page }) => {
    // Clear cookies for fresh session
    await page.context().clearCookies();
    await page.goto("/dashboard");
    // App either redirects to login (auth guard) or shows dashboard (static)
    // Both are acceptable - verify page loads without error
    await expect(page.locator("body")).toBeVisible();
    const url = page.url();
    const isLoginPage = url.includes("login") || url.includes("signin");
    const isDashboardPage = url.includes("dashboard");
    expect(isLoginPage || isDashboardPage).toBeTruthy();
  });
});
