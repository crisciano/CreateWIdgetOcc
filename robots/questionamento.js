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
			
			content.props.push(obj)
			console.log(content.props);
			if(condition == 'n'){
				break;
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
		}else if(tipo == 2){
			// obj = questionBooleanType(obj,content)
			obj = getQuestionsObj(obj, content.questions.booleanType)
		}

		obj.type = content.typeProps[tipo]

		return obj
	}

	function getQuestionsObj(obj, questions){
    questions.forEach(question => {
			obj[`${question.key}`] = readline.question( question.value)
		})
		console.log(obj.type);
		if( obj.type == "stringType"){
			obj.defaultValue = obj.defaultValue === "s" ? true: false  
		}
		obj.id = obj.name
		obj.helpTextResourceId =  obj.name +"Help";
		obj.labelResourceId = obj.name + "Label";
		delete obj.label
		delete obj.help
    return obj
	}

}

module.exports = robot