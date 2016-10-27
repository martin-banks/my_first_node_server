
let optionTemplate = (options)=>{
	return options.map(opt=>{
		return `<option value="${opt}">${opt}</option>`
	}).join('')
}

module.exports = (id, menu)=>{
	return `
		<div>
			<select id="${id}">
				<option value="null">Choose an option</option>
				${optionTemplate(menu)}
			</select>
		</div>
	`
}