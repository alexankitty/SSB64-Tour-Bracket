const { app, BrowserWindow, Menu, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const RPC = require('discord-rpc');

//<Button>Start Animation</Button>

//$('#circle').animate({left: '+=64px',}, 2500, function() {
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
var mainWindow
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window. 
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    icon: './assets/icons/icon.png'
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));


//Open file
const template = [
  
  {
  label: 'File',
  submenu: [
    { 
      label: 'Open *SSBBRAK settings..',
    click() {
      openFile();
      
    }
  },
  
  {
    label: 'Save Settings',
    submenu: [
      {
        
        label: 'Save *SSBBRAK settings...',
        click() {
          saveFile();
        }
      }
    ]
  }
 ]
},
//{
  //label: 'Change BG Color'
//},

//This function gives user a tip to find input controls in order to control players on the bracket.
{
  label: 'Hotkeys help'
}

];
  

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)


  // Open the DevTools.
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);


// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

//Client ID
var clientId ='795229448332509184';
//
const rpc = new RPC.Client({
  transport: "ipc"});
const startTimestamp = new Date();

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

//Open Bracket File.
function openFile() {
const files = dialog.showOpenDialogSync(mainWindow, {
  properties: ['openFile'],
  
  filters: [
    { name: 'Smash Bros BRACKET Files', extensions: ['SSBBRAK'] },
    { name: 'All Formats', extensions: ['*'] } 
    
  ]
});
  if (!files) return;

 const file = files [0];
 const fileContent = fs.readFileSync(file).toString();
 console.log(fileContent);
}

function saveFile(){
  const files = dialog.showSaveDialogSync(mainWindow, {
    properties: ['saveFile'],
    
    filters: [
      { name: 'Smash Bros BRACKET Files', extensions: ['SSBBRAK'] },
      { name: 'All Formats', extensions: ['*'] } 
      
    ]
  });
    if (!files) return;
  
   const file = files [0];
   const fileContent = fs.readFileSync(file).toString();
   console.log(fileContent);

}

rpc.on("ready", () => {
  rpc.setActivity({
    details: "In Progress: Grand Final test",
    state: "Red Robin set",
    startTimestamp: new Date(),
    largeImageKey: "large_image",
    largeImageText: "Smash Bros Tournament",
    smallImageKey: "small_image",
    smallImageText: "fight"
  });
  console.log("rich presence is in progress.")
});

rpc.login({
  clientId: "795229448332509184"
});

