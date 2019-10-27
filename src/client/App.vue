<template>
	<div class="container">
		<div class="m-3">
			<div id="content">
				<h1>Vue inside Electron</h1>
				<p>
					<label>Text:</label>
					<input type="text" v-model="text">
					<button class="btn btn-primary" v-on:click="submit">Send Message</button></p>
				<p><span>{{ text }}</span></p>
				<p>Received: {{ messageResult }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	const {ipcRenderer} = require('electron')

	let vm

	ipcRenderer.on('message-result', (event, data) => {
		vm.messageResult = data
	})

	module.exports = {
		created: function() {
			vm = this
		},
		data: function() {
			return {
				text: 'Hello world!',
				messageResult: ''
			}
		},
		methods: {
			submit: function() {
				if (this.text) {
					ipcRenderer.send('message', this.text)
				}
			}
		}
	}
</script>

<style>
</style>