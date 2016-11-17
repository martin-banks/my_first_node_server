(()=>{
	"use strict"

	console.log('web app')

	//document.querySelector('select').innerHTML = data[0]
	document.querySelector('#chooseState').addEventListener('change', ()=>{
		let chosenState = event.target.value
		console.log('city:', chosenState)
		window.location.pathname = chosenState
	})

})()