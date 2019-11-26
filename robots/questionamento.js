let readline = require('readline-sync');

async function robot(content){
	var questions = content.questions;
	
	questions.forEach(question => {
		if(question.key === 'languages'){
			var languages = readline.question(question.value)
			if(languages) content.language = languages.split(',');
		}else{
			content[`${question.key}`] = readline.question(question.value)
		}
	});
	

	

	// content.nameWidget = setNameProject();
	// content.extensionID = setExtension();
	// content.description = setDescription();
	// languages = setLanguages();


	// function setNameProject(){
	// 	return readline.question(question[0] );
	// }

	// function setDescription(){
	// 	return readline.question( question[1] );
	// }
	
	// function setExtension(){
	// 	return readline.question( question[2]);
	// }

	// function setLanguages(){
	// 	return readline.question(`${question[3]}(${content.language}) `)
	// }

}

module.exports = robot