'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var GemGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        // this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Grunt ESLint Mocha generator...'));

    var prompts = [
      {
        name: 'moduleName',
        message: 'Module name?',
        default: 'My Module'
      },
      {
        name: 'authorName',
        message: 'Author name?',
        default: 'Seth McLaughlin'
      },
      {
        name: 'license',
        message: 'License?',
        default: 'MIT'
      }
    ];

    this.prompt(prompts, function (props) {
      this.moduleName     = props.moduleName;
      this.moduleNameSlug = this._.slugify(this.moduleName);
      this.authorName     = props.authorName;
      this.license        = props.license;
      done();
    }.bind(this));
  },

  app: function () {
    console.log('app', this.someOption);
  },

  projectfiles: function () {
    this.mkdir(this.moduleNameSlug);
    this.mkdir(path.resolve(this.moduleNameSlug, 'bin'));
    this.copy('bin/app', path.resolve(this.moduleNameSlug, 'bin', this.moduleNameSlug));
    this.template('_package.json', path.resolve(this.moduleNameSlug, 'package.json'));
    this.copy('_editorconfig', path.resolve(this.moduleNameSlug, '.editorconfig'));
    this.copy('_eslintrc', path.resolve(this.moduleNameSlug, '.eslintrc'));
    this.copy('_Gruntfile.js', path.resolve(this.moduleNameSlug, 'Gruntfile.js'));
    this.directory('test', path.resolve(this.moduleNameSlug, 'test'));
  }
});

module.exports = GemGenerator;
