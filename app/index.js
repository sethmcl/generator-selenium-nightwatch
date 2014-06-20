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
        name: 'moduleDescription',
        message: 'Description?',
        default: 'An awesome module'
      },
      {
        name: 'githubUrl',
        message: 'github url?',
        default: 'sethmcl/projectX'
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
      this.moduleDescription = props.moduleDescription;
      this.moduleName        = props.moduleName;
      this.moduleNameSlug    = this._.slugify(this.moduleName);
      this.authorName        = props.authorName;
      this.license           = props.license;
      this.githubUrl         = props.githubUrl;
      done();
    }.bind(this));
  },

  app: function () {
  },

  projectfiles: function () {
    this.mkdir(this.moduleNameSlug);
    this.mkdir(path.resolve(this.moduleNameSlug, 'bin'));
    this.copy('bin/app', path.resolve(this.moduleNameSlug, 'bin', this.moduleNameSlug));
    this.template('_package.json', path.resolve(this.moduleNameSlug, 'package.json'));
    this.copy('_editorconfig', path.resolve(this.moduleNameSlug, '.editorconfig'));
    this.copy('_eslintrc', path.resolve(this.moduleNameSlug, '.eslintrc'));
    this.template('_Gruntfile.js', path.resolve(this.moduleNameSlug, 'Gruntfile.js'));
    this.copy('_travis.yml', path.resolve(this.moduleNameSlug, '.travis.yml'));
    this.copy('_gitignore', path.resolve(this.moduleNameSlug, '.gitignore'));
    this.copy('_coveralls.yml', path.resolve(this.moduleNameSlug, '.coveralls.yml'));
    this.template('_README.md', path.resolve(this.moduleNameSlug, 'README.md'));
    this.directory('test', path.resolve(this.moduleNameSlug, 'test'));
    this.directory('lib', path.resolve(this.moduleNameSlug, 'lib'));
  }
});

module.exports = GemGenerator;
