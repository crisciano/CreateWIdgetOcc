async function robot(content){
  await content.languages.forEach((language)=>{
    
    if(content.typeWidget == 0){
      content.oldFiles.push({
        "extPath": `{base}\\widget\\{projectName}\\locales\\${language}\\`,
        "extFile": `ns.headerLineTop.json`,
        "extContent": `ns`
      })
    }else {
      content.oldFiles.push({
        "extPath": `{base}\\widget\\{projectName}\\config\\locales\\`,
        "extFile": `${language}.json`,
        "extContent": `ns`
      })
    }
  })
}

module.exports = robot