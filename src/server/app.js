const {ipcMain} = require('electron')

function init() {
	ipcMain.on('message', (event, data) => {
		console.log('Received: ' + data)
		event.sender.send('message-result', data)
	})

	console.log('Server ready.')
}

module.exports = {
	init: init
}
