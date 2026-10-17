const html = await fetch("http://127.0.0.1:3000").then((r) => r.text());
const link = [...html.matchAll(/href="([^"]+\.css[^"]*)"/g)].map((m) => m[1])[0];
const css = await fetch(new URL(link, "http://127.0.0.1:3000")).then((r) => r.text());
for (const token of ["page-shell", "html.light", "color-scheme", "f6f7fc", "scroll-behavior"]) {
  const index = css.indexOf(token);
  console.log(token, index);
  if (index >= 0) console.log(css.slice(index, index + 280));
  console.log("---");
}
process.exit(0);
