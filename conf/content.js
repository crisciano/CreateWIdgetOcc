exports.content = {
	'dev': 'Crisciano S. Botelho',
	'nameWidget': 'widgetExample',
	"widget" : ['js', 'less', 'locales', 'templates'],
	"custom": [{ "config": ["locales" ]}],
	"files": {
		"custom": [
			{
				"extPath" : "{base}\\",
				"extFile" : "ext.json",
				"extContent" :"ext"
			},{
				"extPath" : "{base}\\widget\\{projectName}\\",
				"extFile" : "widget.json",
				"extContent" :"widget"
			},{
				"extPath" : "{base}\\widget\\{projectName}\\config\\",
				"extFile" : "config.json",
				"extContent" :"config"
			}
		],
		"basic": [
			{
				"extPath" : "{base}\\",
				"extFile" : "ext.json",
				"extContent" :"ext"
			},{
				"extPath" : "{base}\\widget\\{projectName}\\",
				"extFile" : "widget.json",
				"extContent" :"widget"
			},{
				"extPath" : "{base}\\widget\\{projectName}\\less\\",
				"extFile" : "widget.less",
				"extContent" :"less"
			},{
				"extPath" : "{base}\\widget\\{projectName}\\js\\",
				"extFile" : "script.js",
				"extContent" :"script"
			},{
				"extPath" : "{base}\\widget\\{projectName}\\templates\\",
				"extFile" : "display.template",
				"extContent" :"template"
			}
		]
	},
	"oldFiles": [],
	"props": [],
	"typeProps": {
		1: "stringType",
		2: "booleanType",
		3: "optionType",
		4: "multiSelectOptionType",
		5: "mediaType",
		6: "sectionTitleType",
		7: "collectionType"
	},
	'languages': [ 'en', 'pt_BR' ],
	'questions': {
		"basic": [
			{ key: "typeWidget", value: "Tipo de widget? (0 - Basic, 1 - Custom) "},
			{ key: "nameWidget", value: "Nome do widget? (widgetExample) "},
			{ key: "description", value: "Descricao curta do widget? "},
			{ key: "extensionID", value: "Id gerada para o widget? (extensionID) "},
			{ key: "languages", value: "Quais languagens serao usadas? ( en,pt ) "},
		],
		"stringType" : [
			{ key: "required", value: "E uma propriedade obrigatoria (s/n): "},
			{ key: "minLength", value: "Tamanho min (opcional): "},
			{ key: "maxLength", value: "Tamanho max (opcional): "},
			{ key: "pattern", value: "Regex pattern (opcional): "},
		],
		"booleanType" : [
			{ key: "defaultValue", value: "Valor default (s/n): "},
		],
		"basicProps": [
			{ key: "name" , value: "Id da propriedade (active): "},
			{ key: "label", value: "Label da propriedade: "},
			{ key: "help", value: "Texto de ajuda: "}
		]
	}
	
}