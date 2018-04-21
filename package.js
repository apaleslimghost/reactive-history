Package.describe({
	name: 'quarterto:reactive-history',
	version: '1.2.1',
	summary: 'history for meteor, letting tracker do most of the work',
	git: 'git://github.com/quarterto/reactive-history.git',
	documentation: 'README.md',
});

Package.onUse(function(api) {
	api.versionsFrom('1.4.2');
	api.use('ecmascript');
	api.mainModule('reactive-history.js', 'client');
});
