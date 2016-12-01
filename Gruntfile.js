module.exports = function (grunt) {
	grunt.initConfig({
		jshint: {
			all: ["www/libs/englishextra-app/js/bundle.js"]
		}
	});
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.registerTask("default", "jshint");
};
