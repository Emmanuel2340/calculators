module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,css,html,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};