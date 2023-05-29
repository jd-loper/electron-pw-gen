import Xel from "/node-modules/xel/xel.js";

document.body.hidden = true;

document.addEventListener("load", async () => {
  await Xel.whenThemeReady;
  document.body.hidden = false;
});
