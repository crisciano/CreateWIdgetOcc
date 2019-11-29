let fs = require('fs');
let { Helper } = require('../helpers/helper')

async function robot(content){

	async function createPage(){
		let files;
		if(content.typeWidget == 0)
			files = content.files.basic
		else
			files = content.files.custom

		await files.forEach( file =>{
			let fileContent = Helper.getFileContent(file.extContent, content)
			let filePath = Helper.resolvePath(file.extPath, content)
			createFile(file.extFile, fileContent, filePath)
		})
	}
	
	async function createFile(fileName, fileContent, filePath){
		let fullPath = filePath + fileName
		await fs.writeFile(fullPath, fileContent, 'utf8', (err) =>{
			if(err){ console.log(err); return }
			console.log(`Create file -> ${filePath}\\${fileName}`);
		})
	}

	await createPage();
	
}

module.exports = robot