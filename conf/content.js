exports.content = {
	'dev': 'Crisciano S. Botelho',
	'nameWidget': 'widgetExample',
	"widget" : [ 
		'js', 
		'less', 
		'locales', 
		'templates' 
	],
	"custom": [
		{
			"config": [
				"locales"
			]
		}
	],
	'language': [
		'en', 
		'pt_BR'
	],
	'questions': [
		{ key: "typeWidget", value: "Tipo de widget? (0 - Basic, 1 - Custom) "},
		{ key: "nameWidget", value: "Nome do widget? (widgetExample) "},
		{ key: "description", value: "Descricao curta do widget? "},
		{ key: "extensionID", value: "Id gerada para o widget? (extensionID) "},
		{ key: "languages", value: "Quais languagens serao usadas? "},
	]
}