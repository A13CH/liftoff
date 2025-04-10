const { app, BrowserWindow } = require('electron');

const url = require("url");
const path = require("path");

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `./dist/index.html`),
      protocol: "file:",
      slashes: true
    })
  );

  mainWindow.webContents.once('dom-ready', () => {
    mainWindow.webContents.openDevTools(); // Open DevTools once DOM is ready
  });
  
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}
console.log(app);
app.on('ready', createWindow)
// needed for windows app closure 
// darwin represents macOS
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
