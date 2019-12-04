let createDir = require('create-dir')
let { Helper } = require('../helpers/helper')

async function robot(content){

	var projectName = content.nameWidget;
	content.base = projectName;
	let subDir = Helper.getDiretories(content);
	
	var base = `${projectName}/widget`;
	var baseProject = `${base}/${projectName}`;
	// var base = `${content.base}/widget`;

	await createDir(base);
	console.log(`Created project -> ${base}`);
	// pasta com nome do widget
	await createDir(baseProject);
	
	// create subdir in widgets
	await subDir.forEach((item) => {
		createDir(`${baseProject}/config`);
		console.log(`Created subDir -> ${base}/config`);
	})

	if(content.typeWidget == 0){
		// create language
		await content.languages.forEach((item)=>{
			createDir(`${baseProject}/locales/${item}`);
			console.log(`Created language -> ${baseProject}/locales/${item}`);
		})
	}else{
		await createDir(`${baseProject}/config/locales`);
		console.log(`Created subDir -> ${base}/config/locales`);
	}
}

module.exports = robot