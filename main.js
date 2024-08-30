const {app, BrowserWindow,Menu} = require('electron')
const path = require('path')
const os = require('os')



const newWindow = ()=>{
  const win = new BrowserWindow({
    width: 800,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation:true,
    },
    icon: path.join(__dirname,'frontend/assets/imgs/logo.ico')
  })
  win.loadFile(path.join(__dirname,'frontend/index.html'));
  win.setTitle('Music Player');
  Menu.setApplicationMenu(null);
  win.maximize();
}

app.whenReady().then(()=>{
    newWindow();

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