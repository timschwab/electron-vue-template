// Library includes
const {app, BrowserWindow} = require('electron')

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
}

// Start app
app.on('ready', main)
