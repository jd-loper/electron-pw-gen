const { app, BrowserWindow } = require("electron");
const path = require("path");
require("update-electron-app")();

const createWindow = () => {
  const win = new BrowserWindow({
    width: 500,
    height: 325,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
