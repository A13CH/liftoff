const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { addEvent, getAllEvents } = require('./database');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // okay for now — will update later
      contextIsolation: false // allow direct access to ipcRenderer
    }
  });

  mainWindow.loadFile(path.join(__dirname, './dist/index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// 🚀 IPC handlers
ipcMain.handle('add-event', (_, event) => {
  addEvent(event);
});

ipcMain.handle('get-events', () => {
  return getAllEvents();
});
