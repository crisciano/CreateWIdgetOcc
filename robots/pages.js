let fs = require('fs');

async function robot(content){

	async function createPage(){
		await content.pages.map( page =>{
			createFile(page.extFile, page.extContent, page.extPath)
		})
	}
	
	async function createFile(fileName, fileContent, filePath){
		await fs.writeFile(filePath, fileContent, 'utf8', (err) =>{
			if(err){ console.log(err); return }
			console.log(`Create file -> ${fileName}`);
		})
	}

	await createPage();
	
}

module.exports = robot