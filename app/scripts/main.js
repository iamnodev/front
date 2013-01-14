require.config({
	paths: {
		'jquery': 'vendor/jquery/jquery-1.8.3',
		'underscore': 'vendor/underscore-amd/underscore',
		'backbone': 'vendor/backbone-amd/backbone',
		'handlebars': 'vendor/handlebars/handlebars-1.0.rc.1'
	}
});

require(['views/app'], function(AppView) {
	new AppView;
});
