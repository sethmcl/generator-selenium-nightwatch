module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    release: {
        options: {
          github: { 
            repo: 'sethmcl/generator-selenium-nightwatch', //put your user/repo here
            // usernameVar: 'GITHUB_USERNAME', //ENVIRONMENT VARIABLE that contains Github username 
            // passwordVar: 'GITHUB_PASSWORD' //ENVIRONMENT VARIABLE that contains Github password
          }
        }
      }
  });

  grunt.loadNpmTasks('grunt-release');
};
