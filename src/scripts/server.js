let http = require('http')
let EventEmitter = require('events').EventEmitter
let path = require('path')
let fs = require('fs')


let htmlPage = require('./templates/basicHTML.js')
let selectMenu = require('./templates/selectMenu')

const express = require('express')
const bodyParser = require('body-parser');
const app     = express();


let helloWorld = (param)=> `<h1>Allowed is ${param}</h1>`
let allowed = ['good', 'bad']



const myEE = new EventEmitter();
myEE.on('foo', () => console.log('foo'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');


let menuTemp = ["NSW","QLD","TAS"]
let formTemp = `
	<form method="post" enctype="multipart/form-data" action="/upload">
    <input type="file" name="image" >
  <input type="submit" value="Submit">
</form>
`
/*
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
		response.write( htmlPage(formTemp) )}
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

*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
	extended: true,
	uploadDir: './src'
})); 


// ...
app.post('/upload', function (req, res) {
	console.log(req.files)
    /*var tempPath = req.files.file.path,
        targetPath = path.resolve('./uploads/image.png');
    if (path.extname(req.files.file.name).toLowerCase() === '.png') {
        fs.rename(tempPath, targetPath, function(err) {
            if (err) throw err;
            console.log("Upload completed!");
        });
    } else {
        fs.unlink(tempPath, function () {
            if (err) throw err;
            console.error("Only .png files are allowed!");
        });
    }
    */
});

/*app.post('/myaction', function(req, res) {
	console.log('form request', req.body)
  res.send('You sent the file "' + req.query.name);
});*/


app.listen(4000, function() {
  console.log('Server running at http://127.0.0.1:4000/');
});

app.get('/', (req, res)=>{
	res.send(`<p>hello world</p> ${htmlPage(formTemp)}`)
})

app.get('/image.png', function (req, res) {
    res.sendfile(path.resolve('./uploads/image.png'));
}); 