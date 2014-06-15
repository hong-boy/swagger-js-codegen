module.exports = function (grunt) {
    'use strict';

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    // Load local tasks.
    //grunt.loadTasks('tasks');
 
    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'lib/**/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        vows: {
            all: {
                options: {
                    verbose: true,
                    colors: true,
                    coverage: 'json'
                },
                // String or array of strings
                // determining which files to include.
                // This option is grunt's "full" file format.
                src: ['test/*.js', 'spec/*']
            }
        },
        jsonlint: {
            all: {
                src: ['package.json', '.jshintrc']
            }
        }
    });

    // Default task.
    grunt.registerTask('default', ['jsonlint', 'jshint', 'vows']);
};
