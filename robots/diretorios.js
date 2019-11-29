let createDir = require('create-dir')

async function robot(content){

	var projectName = content.nameWidget;
	let subDir;

	if(content.typeWidget == 0)
		subDir = content.widget;
	else
		subDir = content.custom;

	var language = content.language;
	content.base = projectName;
	
	var base = `${content.base}/widget`;

	await createDir(base);
	console.log(`Created project -> ${base}`);
	// pasta com nome do widget
	await createDir(`${base}/${projectName}`);
	// create subdir in widgets
	await subDir.forEach((item) => {
		createDir(`${base}/${projectName}/${item}`);
		console.log(`Created subDir -> ${base}/${item}`);
	})
	// create language
	await language.forEach((item)=>{
		createDir(`${base}/${projectName}/locales/${item}`);
		console.log(`Created language -> ${base}/${projectName}/locales/${item}`);
	})


}

module.exports = robot