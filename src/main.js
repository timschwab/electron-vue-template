// Library includes
const {app, BrowserWindow} = require('electron')

// Custom infrastructure
const api = require('./server/app')

function main() {
	// Create main window
	let win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true
		}
	})
	win.loadFile('src/client/index.html')

	// Prepare example api
	api.init()
}

// Start app
app.on('ready', main)
