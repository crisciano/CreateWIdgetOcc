let readline = require('readline-sync');
let Prompt = require('prompt-checkbox');
let inquirer = require('inquirer');

// const question = [
// 	'Nome do projeto? ',
// 	'Quantas paginas? ',
// 	'qual o titulo da pagina? '
// ]

async function robot(content){
	var question = content.questions.question;
	// content.teste = await setTeste();
	content.nameProject = setNameProject();
	content.extensionID = setExtension();
	content.description = setDescription();
	var languages = setLanguages();

	if(languages)
		content.language = languages.split(',');

	function setNameProject(){
		return readline.question(question[0]);
	}
	
	function setExtension(){
		return readline.question(question[2]);
	}

	function setDescription(){
		return readline.question(question[1]);
	}
	function setLanguages(){
		return readline.question(`${question[3]}(${content.language}) `)
	}

}

module.exports = robot