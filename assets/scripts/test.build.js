({
	appDir: '../',
	baseUrl: 'scripts',
	dir: '../../test-build',
	optimize: 'none',
	paths: {
		'jquery': 'jquery/jquery-1.8.3.js',
		'underscore': 'underscore/underscore.js',
		'backbone': 'backbone/backbone.js',
		'handlebars': 'handlebars/handlebars-1.0.rc.1.js'
	},
	modules: [
		{
			name: 'main',
			exclude: ['jquery', 'underscore', 'backbone', 'handlebars']
		}
	]
})