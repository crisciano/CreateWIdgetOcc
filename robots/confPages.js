async function robot(content){

  var languages = content.language;

  await languages.forEach((item)=>{
    // return paste
    content.oldFiles.push({
      "extPath": `{base}\\widget\\{projectName}\\locales\\${item}\\ns.headerLineTop.json`,
      "extFile": `ns.headerLineTop.json`,
      "extContent": `ns`
    })
  })
}

module.exports = robot