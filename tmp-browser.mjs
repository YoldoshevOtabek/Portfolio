import { chromium } from "playwright";

const browser = await chromium.launch({ channel: "msedge", headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
page.on("pageerror", (error) => console.log("PAGEERROR", error.message));
page.on("console", (msg) => {
  if (msg.type() === "error") console.log("CONSOLE", msg.text());
});
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });

const initialTitle = await page.title();
const before = await page.evaluate(() => {
  const main = document.querySelector("main");
  const style = getComputedStyle(main);
  return {
    htmlClass: document.documentElement.className,
    bg: style.backgroundColor,
    color: style.color,
  };
});

await page.getByRole("button", { name: "Light rejim" }).click();
await page.waitForTimeout(200);

const light = await page.evaluate(() => {
  const main = document.querySelector("main");
  const h1 = document.querySelector("h1");
  const style = getComputedStyle(main);
  return {
    htmlClass: document.documentElement.className,
    mainClass: main.className,
    bg: style.backgroundColor,
    color: style.color,
    h1: getComputedStyle(h1).color,
    stored: localStorage.getItem("theme"),
  };
});

console.log("LIGHT", JSON.stringify(light));
await page.screenshot({ path: "C:/Users/user/Desktop/Portfolio/my-app/tmp-light-desktop.png", fullPage: false });

await page.getByRole("link", { name: "Men haqimda", exact: true }).click();
await page.waitForTimeout(300);
const aboutTitle = await page.title();
console.log("ABOUT", aboutTitle);

await page.getByRole("link", { name: "Ko‘nikmalar", exact: true }).click();
await page.waitForTimeout(200);
const skillsTitle = await page.title();
console.log("SKILLS", skillsTitle);

await page.locator("nav[aria-label='Asosiy navigatsiya']").getByRole("link", { name: "Loyihalar", exact: true }).click();
await page.waitForTimeout(200);
const projectsTitle = await page.title();
console.log("PROJECTS", projectsTitle);

await page.getByRole("link", { name: "Aloqa", exact: true }).click();
await page.waitForTimeout(200);
const contactTitle = await page.title();
console.log("CONTACT", contactTitle);

await page.screenshot({ path: "C:/Users/user/Desktop/Portfolio/my-app/tmp-light-contact.png", fullPage: false });

await page.getByRole("link", { name: "Bosh sahifa" }).click();
await page.waitForTimeout(200);
const homeTitle = await page.title();

await page.getByRole("button", { name: "Dark rejim" }).click();
await page.waitForTimeout(200);
const dark = await page.evaluate(() => {
  const main = document.querySelector("main");
  return {
    htmlClass: document.documentElement.className,
    bg: getComputedStyle(main).backgroundColor,
    color: getComputedStyle(main).color,
    stored: localStorage.getItem("theme"),
  };
});

await page.reload({ waitUntil: "networkidle" });
const restored = await page.evaluate(() => document.documentElement.classList.contains("light"));

const mobile = await browser.newPage({ viewport: { width: 390, height: 800 } });
await mobile.goto("http://localhost:3000", { waitUntil: "networkidle" });
await mobile.evaluate(() => localStorage.setItem("theme", "light"));
await mobile.reload({ waitUntil: "networkidle" });
await mobile.screenshot({ path: "C:/Users/user/Desktop/Portfolio/my-app/tmp-light-mobile.png" });
const mobileState = await mobile.evaluate(() => ({
  light: document.documentElement.classList.contains("light"),
  bg: getComputedStyle(document.querySelector("main")).backgroundColor,
}));

console.log(JSON.stringify({
  initialTitle,
  before,
  light,
  aboutTitle,
  skillsTitle,
  projectsTitle,
  contactTitle,
  homeTitle,
  dark,
  restored,
  mobileState,
}, null, 2));

await browser.close();
