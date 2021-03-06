module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            browserify: {
                files: ['src/**/*.js'],
                tasks: ['browserify'],
                options: {
                    atBegin: true
                }
            }
        },
        browserify: {
            dist: {
                options: {
                    transform: [['babelify', {presets: ['es2015', 'react']}]]
                },
                src: ['src/**/*.js'],
                dest: 'build/app.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', ['browserify']);

};