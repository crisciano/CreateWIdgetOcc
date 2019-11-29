let readline = require('readline-sync');
let { Helper } = require('../helpers/helper')

async function robot(content){
	var questions = content.questions;
	
	questions.basic.forEach(question => {
		if(question.key === 'languages'){
			var languages = readline.question(question.value)
			if(languages) content.language = languages.split(',');
		}else{
			content[`${question.key}`] = readline.question(question.value)
		}
	});

	if(content.typeWidget == 1){

		while(1){
			let obj = basicQuestionsProps(content)

			condition = readline.question("Deseja incluir mais propriedades customizadas (s/n)? ")

			if(condition == 'n'){
				process.exit(0)
			}else{
				content.props.push(obj)
				console.log(content.props);
			}
		}
	}

// - stringType: producer text string simple. Possible:
//     - minLength: min length
//     - maxLength: max length
//     - pattern: regex 
// - optionType: producer drop-down, list values. Possible:
//     - id: unique id
//     - value: value options
//     - labelResourceId: label display 
// - multiSelectOptionType: producer list options but possible select multiples
//     - id: unique id
//     - value: value options
//     - labelResourceId: label display 
// - booleanType: producer element checkbox
// - mediaType: producer imgs from library
// - sectionTitleType: producer text title widget
// - collectionType: producer collection in catalog

	function basicQuestionsProps(content) {
		let obj = {}
		let tipo = readline.question("Tipo de propriedade (1 - stringType, 2 - booleanType  ): ")

		getQuestionsObj(obj, content.questions.basicProps)

		if(tipo == 1){
			// obj = questionStringType(obj, content)
			obj = getQuestionsObj(obj, content.questions.stringType)
			// obj.id = obj.name
		}else if(tipo == 2){
			// obj = questionBooleanType(obj,content)
			obj = getQuestionsObj(obj, content.questions.booleanType)
		}

		obj.type = content.typeProps[tipo]

		return obj
	}

	// function questionStringType(obj, content){
	// 	obj.id = obj.name

	// 	getQuestionsObj(obj, content.questions.stringType)
	// 	return obj
	// }

	// function questionBooleanType(obj, content){
	// 	getQuestionsObj(obj, content.questions.booleanType)
	// 	return obj
	// }

	function getQuestionsObj(obj, questions){
    questions.forEach(question => {
			obj[`${question.key}`] = readline.question( question.value)
		})
		obj.id = obj.name
    return obj
	}

}

module.exports = robot