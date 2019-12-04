class Helper {
  constructor() {}

  getDate() {
    var d = new Date();
    var year = d.getFullYear();
    var month = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0'); 

    return `${year}-${month}-${day}`;
  }

  getFileExt(content){

    var eTranslations = [];

    content.languages.forEach(language=>{
      
      // ext translate
      eTranslations.push({
        "language": language, 
        "name": `${content.nameWidget}`,
        "description": `${content.description}`})
    })

    var extJson = {
      "extensionID": content.extensionID,
      "developerID": "crisciano.botelho",
      "createdBy"  : "Compasso",
      "version"    : 1,
      "timeCreated": this.getDate(),
      "translations": eTranslations
    };
    return JSON.stringify(extJson, null, 4);
  }

  getFileWidget(content){
    var wTranslations = [];

    content.languages.forEach(language=>{

      // widget translate
      wTranslations.push({ 
        "language": language, 
        "name": `${content.nameWidget}`})
    })

    var widgetJson = {
      "availableToAllPages": true,
      "config": {},
      "global": false,
      "globalEnabled": true,
      "i18nresources": "headerLineTop",
      "imports": [],
      "javascript": "script",
      "jsEditable": true,
      "minWidth": 1,
      "source": 101,
      "version": 1,
      "translations" : wTranslations
    };
    if(content.typeWidget == 1){
      delete widgetJson['i18nresources'];
      delete widgetJson['javascript'];
    }
    return JSON.stringify(widgetJson, null, 4);
  }

  getFileConfig(content){

    var widgetConfig = {
        "widgetDescriptorName": `${content.nameWidget}`,
        "properties": content.props
    }

    return JSON.stringify(widgetConfig, null, 4);

  }

  getFileNs(content) {
    let res = {};
    if(content.props.length){
      content.props.forEach( prop => {
        res[`${prop.name}Label`] = prop.label,
        res[`${prop.name}Help`] = prop.help
      })
    }

    var nsJson = {
      "resources": res
    };
    return JSON.stringify(nsJson, null, 4);
  }

  getFileLess(){

    return `
      .headerLineTop {
          background: #fff;
      }
    `;
  }

  getFileScript(){
    return `
      define(
        // Dependencies
        ['jquery', 'knockout'],
  
        // Module Implementation
        function($,ko) {
            // We recommend enabling strict checking mode
            'use strict';
  
            return {
                onLoad: function(widget) {
                    console.log('Carregando widget base...');
                },
                beforeAppear: function(page) {
                  // Code to run before showing the widget here.
                }
            }
        }
      );
    `;
  }

  getFileTemplate (){
    return  `
      <div class="headerLineTop">
          <!-- Conteudo do widget -->    
      </div>
    `;
  }

  getFileContent(file, content){

    let fileContent;

    var languages = content.languages;

    var eTranslations = [];
    var wTranslations = [];

    languages.forEach(language=>{
      
      // ext translate
      eTranslations.push({
        "language": language, 
        "name": `${content.nameWidget}`,
        "description": `${content.description}`})

      // widget translate
      wTranslations.push({ 
        "language": language, 
        "name": `${content.nameWidget}`})
    })

    if(file == "ext")
      fileContent = this.getFileExt(content)
    else if(file == "widget")
      fileContent = this.getFileWidget(content)
      // fileContent = this.getFileWidget(wTranslations)
    else if(file == "ns")
      fileContent = this.getFileNs(content)
    else if(file == "less")
      fileContent = this.getFileLess()
    else if(file == "script")
      fileContent = this.getFileScript()
    else if(file == "config")
      fileContent = this.getFileConfig(content)
    else if(file == "template")
      fileContent = this.getFileTemplate()

    return fileContent;
  }

  resolvePath(path, content){
    var projectName = content.nameWidget;
    var base = content.base;
    let newPath = path.replace('{base}', base);
    newPath = newPath.replace('{projectName}', projectName);
    return newPath
  }

  /**
   * array
   * return obj
   */
  getQuestionsObj(obj, questions){
    questions.forEach(question => {
			obj[`${question.key}`] = readline.question( question.value)
    })
    return obj
  }

  getDiretories(content){
    let dir;
    content.typeWidget == 0 ? dir = content.widget: dir = content.custom;
    return dir
  }

  getFiles(content){
    let files; 
    content.typeWidget == 0 ? files = content.files.basic : files = content.files.custom
    files = this.includeOldFiles(files, content.oldFiles)
    return files
  }

  includeOldFiles(files, oldFiles) {
    oldFiles.forEach( file => files.push(file))
    return files
  }

}

exports.Helper = new Helper();