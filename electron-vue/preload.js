const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getEvents: () => ipcRenderer.invoke('get-events'),
  addEvent: (event) => ipcRenderer.invoke('add-event', event)
});
