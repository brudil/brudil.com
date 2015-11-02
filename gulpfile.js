var gulp = require('gulp');
var SpeckBuild = require('speck-build');

new SpeckBuild(gulp, function() {
  this.name = 'brudil';
  this.version = require('./package.json').version;
  this.assetsDirectory = './assets';

  this.vendorJS = [
  ];

  this.disableSvgoPlugins = ['removeUnknownsAndDefaults', 'mergePaths', 'collapseGroups'];

  this.entries = {
    css: ['style'],
    bundles: ['main']
  };

});
