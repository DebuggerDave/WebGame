const http = require('https')
const express = require('express')
const app = express()
const fs = require('fs')

const hostname = '192.168.1.70'
const port = process.env.PORT || 5555

app.use(express.static('./'))

app.get('/', (req, res) => {
	res.setHeader('Content-Type', 'image/gif')
	res.sendFile('./dist/index.html')
})

/* TODO FOR HTTPS
const options = {
	key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
	cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
};
*/

const server = http.createServer(options, app)

server.listen(port, hostname, () => {
	console.log(`Server running at https://${hostname}:${port}/`)
})

process.on('SIGTERM', () => {
	server.close( () => {
		console.log(`Server closed at http://${hostname}:${port}/`)
	})
})
