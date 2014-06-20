module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    npmrelease: {
      options: {
        push: true,
        bump : true,
        pushTags: true,
        npm: true,
        silent : false,
        commitMessage : 'bump version number to %s'
      },
      patch : {

      }
    }
  });

  grunt.loadNpmTasks('grunt-npm-release');

  // Default task(s).
  grunt.registerTask('release', ['npmrelease']);
};
