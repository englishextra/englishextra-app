/*jslint node: true */
/*jslint es6 */
module.exports = function (grunt) {
	"use strict";
	grunt.initConfig({
		jshint: {
			all: ["www/libs/englishextra-app/js/bundle.js"]
		}
	});
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.registerTask("default", "jshint");
};
