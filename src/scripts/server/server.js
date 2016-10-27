let http = require('http')
let EventEmitter = require('events').EventEmitter
let fs = require('fs')

let htmlPage = require('./templates/basicHTML.js')
let selectMenu = require('./templates/selectMenu')


let helloWorld = (param)=> `<h1>Allowed is ${param}</h1>`
let allowed = ['good', 'bad']



const myEE = new EventEmitter();
myEE.on('foo', () => console.log('foo'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');


let menuTemp = ["NSW","QLD","TAS"]


const server = http.createServer()

server.on('request', (request, response)=>{
	console.log('request received', request.url)
	console.log('dirname', __dirname)
	if (request.url.match(/.js$/)) {
		return response.end(fs.readFileSync(__dirname + '/webapp' + request.url))
	} else {
		//response.end(  )
	}
	
	if (request.url === '/NSW') {
		response.write(`<h1>NSW</h1>`)
	} else {
		response.write(htmlPage(selectMenu('chooseState', menuTemp)))}
	//response.end(htmlPage('blah'))

	
	
	response.end('')
})
server.listen(3000)




server.once('connection', (data)=>{
	console.log('first user')
})
server.on('connection', (data)=>{
	console.log('user connected')
})
server.on('foo', (data)=>{
	console.log('user connected')
})


