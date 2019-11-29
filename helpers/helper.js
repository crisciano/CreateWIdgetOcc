class Helper {
  constructor() {}

  getDate() {
    var d = new Date();
    var year = d.getFullYear();
    var month = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0'); 

    return `${year}-${month}-${day}`;
  }

  getFileExt(content, eTranslations){
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

  getFileWidget(wTranslations){
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
    return JSON.stringify(widgetJson, null, 4);
  }

  getFileNs() {
    var nsJson = {
      "resources": {
          "newResource" : "new resource"
      }
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

    var languages = content.language;

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
      fileContent = this.getFileExt(content, eTranslations)
    else if(file == "widget")
      fileContent = this.getFileWidget(wTranslations)
    else if(file == "ns")
      fileContent = this.getFileNs()
    else if(file == "less")
      fileContent = this.getFileLess()
    else if(file == "script")
      fileContent = this.getFileScript()
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

}

exports.Helper = new Helper();