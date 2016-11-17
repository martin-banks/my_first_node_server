const express = require('express')
const multer  = require('multer')
//const upload = multer({ dest: 'uploads/' })
const fs = require('fs')

const app = express()

let port = 5000


/*app.post('/upload', (req, res)=>{
	console.log(req.files)
	console.log(req.file)
	res.send('file received?')
})
*/

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })
var multiupload = upload.fields([
		{name: 'hidden'},
		{name: 'avatar' }
	])


app.post('/uploadImage', multiupload, function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  res.send(`${JSON.stringify(req.files, 'utf8', '\t')} ${JSON.stringify(req.body, 'utf8', '\t')} `)
  console.log(JSON.stringify(req.body, 'utf8', '\t'))

  let b = JSON.stringify(req.body.json)

  fs.writeFile('secretfile.js', b, err=>{
  	err ? console.log(err) : console.log('body written')
  })
 
})

app.get('/', function (req, res) {
	res.send(`
		Hello World!
		<form id="theForm" method="post" enctype="multipart/form-data" action="/uploadImage">
			<input id="imageuploader" type="file" name="avatar" />
			<p name="hidden" value="some text">some text</p>
			<input id ="hiddenId" type="hidden" name="antoerh" value="antoerh value" />
			<input id ="hiddenId2" type="hidden" name="json" value="empty" />
			<input type="submit" value="Submit" />
		</form>
		<img id="someImage" src="#" alt="" />

		<script>
			document.getElementById("imageuploader").onchange = function () {
				var reader = new FileReader()
				reader.onload = function (e) {
					// get loaded data and render thumbnail
					document.getElementById("someImage").src = e.target.result
				}
				// read the image file as a data URL
				reader.readAsDataURL(this.files[0])
			};
			let somestuff = {
				title: 'lovely title',
				text: 'Lorem ipsum dolor sit amet.'
			}
	document.getElementById('hiddenId2').value = JSON.stringify(somestuff, 'utf8', '\t')
			
		</script>
		
	`)
})

app.get('/uploads', (req, res)=>{
	res-send()
})

app.listen(port, function () {
	console.log(`Example app listening on port ${port}!`)
})