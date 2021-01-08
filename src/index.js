const { app, BrowserWindow, Menu, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const RPC = require('discord-rpc');


//ToDO: 15 more to do.
//finish 7 more icons on the bracket and script them.
//Photoshop for names and scores.
//photoshop for custom icons.
//New bracket set.
//Change font for the scores, names, etc.
//Implement hotkeys help such as navigating the icons.
//Implement global hotkeys.
//We're going to script the names and scores. When clicking on "Change names" in options, this will make text editor window pop-up and allow users to edit names for each bracket.
//Error message when tournament set and names are empty. When a user attempts to move the player icon without them, this will bring up a error. They need to setup a tournament set and names first before proceeding.
//Fix the rich presence. This will update rounds and players on the bracket on your discord profile playing status display.
//Add a color picker for the background color.
//statistics for names and scores with time and date. (print those stats on the log when tournament is complete. Save and open to view the log on notepad if necessary.)
//Animation for stars whoever is in 1st place. (Will implement that later.)
//p2p private online sharing with a user to control the bracket (I will hold on into that.) 


//-----Regarding of SSBBRAK file, might worry about this later.---//

//make a *.SSBRAK file. In case we lose progress such as PC crash, this app crashes or accidentally closed it while hosting a tournament.
//first, save the file. After saving, this will save the data including icons, scores and names where we left off on the bracket without starting the entire tournament over.
//If one of the issues occurs as I previously mentioned about losing some progress, it will start all over in the bracket when re-opening the app. We assure that bracket file is opened,
//this file will automatically puts it back where it belongs and then resume a tournament without stress.

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
    { name: 'Smash Bros BRACKET set Files', extensions: ['SSBBRAK'] },
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
      { name: 'Smash Bros BRACKET set Files', extensions: ['SSBBRAK'] },
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
    details: "In progress:",
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

