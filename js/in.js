const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow

const calcBtn = document.getElementById('col2')

calcBtn.addEventListener('click', function () {
    const modalPath = path.join('file://', __dirname, 'calc.html')
    let win = new BrowserWindow({frame:false, icon: 'logo.png' ,width: 900, height: 600,webPreferences: {
      nodeIntegration: true
  } })
  win.on('close', (event) => {
    if (win) {
      event.preventDefault()
      event.returnValue = false
      win.focus()
    } else {
      event.returnValue = true
    }
    
  })
  win.on('closed', () => {
    win = null
  })
    win.loadURL(modalPath)
    win.show()
  })

  const autoCalcBtn = document.getElementById('col3')

  autoCalcBtn.addEventListener('click', function () {
    const modalPath = path.join('file://', __dirname, 'autoCalc.html')
    let win = new BrowserWindow({frame:false, icon: 'logo.png' ,width: 900, height: 600,webPreferences: {
      nodeIntegration: true
  } })
  win.on('close', (event) => {
    if (win) {
      event.preventDefault()
      event.returnValue = false
      win.focus()
    } else {
      event.returnValue = true
    }
    
  })
  win.on('closed', () => {
    win = null
  })
    win.loadURL(modalPath)
    win.show()
  })

  