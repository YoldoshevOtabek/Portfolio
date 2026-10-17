import { chromium } from "playwright";

const browser = await chromium.launch({ channel: "msedge", headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
page.on("pageerror", (error) => console.log("PAGEERROR", error.message));
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.getByRole("button", { name: "Light rejim" }).click();

for (const [name, file] of [
  ["Men haqimda", "tmp-light-about.png"],
  ["Ko‘nikmalar", "tmp-light-skills.png"],
  ["Aloqa", "tmp-light-contact.png"],
]) {
  await page.getByRole("link", { name, exact: true }).click();
  await page.waitForTimeout(900);
  console.log(name, await page.title());
  await page.screenshot({
    path: `C:/Users/user/Desktop/Portfolio/my-app/${file}`,
  });
}

await page.locator("nav[aria-label='Asosiy navigatsiya']").getByRole("link", { name: "Bosh sahifa", exact: true }).click();
await page.waitForTimeout(400);
console.log("HOME", await page.title());

await page.getByRole("button", { name: "Dark rejim" }).click();
await page.waitForTimeout(200);
const dark = await page.evaluate(() => ({
  light: document.documentElement.classList.contains("light"),
  bg: getComputedStyle(document.querySelector("main")).backgroundColor,
  color: getComputedStyle(document.querySelector("main")).color,
}));
console.log("DARK", JSON.stringify(dark));
await page.screenshot({ path: "C:/Users/user/Desktop/Portfolio/my-app/tmp-dark-desktop.png" });

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto("http://localhost:3000", { waitUntil: "networkidle" });
await mobile.evaluate(() => localStorage.setItem("theme", "light"));
await mobile.reload({ waitUntil: "networkidle" });
await mobile.waitForTimeout(300);
const mobileState = await mobile.evaluate(() => ({
  light: document.documentElement.classList.contains("light"),
  bg: getComputedStyle(document.querySelector("main")).backgroundColor,
}));
console.log("MOBILE", JSON.stringify(mobileState));
await mobile.screenshot({ path: "C:/Users/user/Desktop/Portfolio/my-app/tmp-light-mobile.png" });
await mobile.getByRole("button", { name: "Menyuni ochish" }).click();
await mobile.waitForTimeout(200);
await mobile.screenshot({ path: "C:/Users/user/Desktop/Portfolio/my-app/tmp-light-menu.png" });
await mobile.getByRole("link", { name: "Men haqimda", exact: true }).click();
await mobile.waitForTimeout(400);
console.log("MOBILE ABOUT", await mobile.title());

await browser.close();
