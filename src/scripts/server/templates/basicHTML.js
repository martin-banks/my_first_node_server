module.exports = (data)=>{ 
	return `
		
		<html>
			<head>
				<meta charset = "UTF-8"/>
			</head>
			<body>
				<div>
					${data}	
				</div>
			</body>
			<script src="./app.js"></script>
		</html>
	`
}