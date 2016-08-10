module.exports = function(grunt) {
	
	grunt.initConfig({
		browserify: {
			dist: {
				options: {
					transform: [['babelify', {presets: ['es2015', 'react']}]],
					cache: {}, 
					packageCache: {}, 
					fullPaths: true,
					debug: true // turn to false in production mode
				},        
				src: ['src/main.js'],
				dest: 'public/js/bundle.js',
			}
		}	
	});
	
	
	grunt.loadNpmTasks('grunt-browserify');
	
	
	grunt.registerTask("default", ["browserify"]);
};