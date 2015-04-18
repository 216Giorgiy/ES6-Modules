var path = require('path');

module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        // read in the project settings from the package.json file into the pkg property
        pkg: grunt.file.readJSON('package.json'),

        traceur: {
          options: {
            modules: "amd"
          },
          custom: {
            files: [{
              expand: true,
              cwd: 'ES6',
              src: ['*.js'],
              dest: 'ES5'
            }]
          }
        },
        express: {
            server: {
                options: {
                    port: 9000,
                    server: path.resolve('./server')
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-traceur');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-keepalive');

    grunt.registerTask('server',['express','keepalive']);
    grunt.registerTask('default',['traceur', 'server']);
};