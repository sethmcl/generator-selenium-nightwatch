'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var SNGenerator = yeoman.generators.Base.extend({
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
    this.log(yosay('Let\'s get started with Nightwatch...'));

    var prompts = [
      {
        name: 'moduleName',
        message: 'Project name?',
        default: 'My Test Project'
      },
      {
        name: 'moduleDescription',
        message: 'Description?',
        default: 'A legit test project'
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
    this.template('_package.json', path.resolve(this.moduleNameSlug, 'package.json'));
    this.copy('_editorconfig', path.resolve(this.moduleNameSlug, '.editorconfig'));
    this.copy('_eslintrc', path.resolve(this.moduleNameSlug, '.eslintrc'));
    this.copy('_eslintignore', path.resolve(this.moduleNameSlug, '.eslintignore'));
    this.copy('_gitignore', path.resolve(this.moduleNameSlug, '.gitignore'));
    this.copy('_Nightwatch.js', path.resolve(this.moduleNameSlug, 'Nightwatch.js'));
    this.copy('_globals.json', path.resolve(this.moduleNameSlug, 'globals.json'));
    this.directory('tests', path.resolve(this.moduleNameSlug, 'tests'));
    this.directory('pages', path.resolve(this.moduleNameSlug, 'pages'));
    this.directory('results', path.resolve(this.moduleNameSlug, 'results'));
  }
});

module.exports = SNGenerator;
