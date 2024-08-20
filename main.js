const {app, BrowserWindow,Menu,Tray,nativeImage} = require('electron')
const path = require('path')
const os = require('os')


//create window function
const newWindow = ()=>{
  const win = new BrowserWindow({
    width: 800,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation:true
    },
    icon: path.join(__dirname,'frontend/assets/imgs/logo.ico')
  })
  win.loadFile(path.join(__dirname,'frontend/index.html'));
  win.setTitle('Music Player');
  win.maximize();
}
//app ready event
app.whenReady().then(()=>{

    newWindow();
    //menu
    const mainMenu = Menu.buildFromTemplate([])
    Menu.setApplicationMenu(mainMenu)

    app.on('activate', ()=>{
        if(BrowserWindow.getAllWindows().length === 0){
            newWindow()
        }
    })  
    
})


app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
})