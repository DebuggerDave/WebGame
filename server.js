const http = require('http')
const fs = require('fs')

const hostname = '192.168.1.70'
const port = process.env.PORT || 5555

const server = http.createServer((req, res) => {
	res.statusCode = 200

	res.setHeader('Content-Type', 'image/gif')
	res.write(fs.readFileSync('./arms_front.gif'))

	res.end()
})

server.listen(port, hostname, () => {
	console.log(`Server running at https://${hostname}:${port}/`)
})

process.on('SIGTERM', () => {
	server.close( () => {
		console.log(`Server closed at http://${hostname}:${port}/`)
	})
})
