let readline = require('readline-sync');
let Prompt = require('prompt-checkbox');
let inquirer = require('inquirer');
var utf8 = require('utf8');

async function robot(content){
	var question = content.questions.question;
	var languages;
	
	content.nameWidget = setNameProject();
	content.extensionID = setExtension();
	content.description = setDescription();
	languages = setLanguages();

	if(languages) content.language = languages.split(',');

	function setNameProject(){
		return readline.question(question[0] );
	}

	function setDescription(){
		return readline.question( question[1] );
	}
	
	function setExtension(){
		return readline.question( question[2]);
	}

	function setLanguages(){
		return readline.question(`${question[3]}(${content.language}) `)
	}

}

module.exports = robot