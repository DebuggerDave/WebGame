const http = require('http')
const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()

const hostname = '192.168.1.70'
const port = process.env.PORT || 5555

app.use(express.static(path.join(__dirname, '/dist/')))

app.get('/index.js', (req, res) => {
	res.sendFile(path.join(__dirname, '/dist/index.js'))
})

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
})

/* TODO FOR HTTPS
const options = {
	key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
	cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
};
*/

const server = http.createServer(app)

server.listen(port, hostname, () => {
	console.log(`Server running on https://${hostname}:${port}/`)
})

process.on('SIGTERM', () => {
	server.close( () => {
		console.log(`Server closed on https://${hostname}:${port}/`)
	})
})
