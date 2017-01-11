const gulp = require('gulp')
const fs = require('fs');
const config = require('../config');
const jsonSass = require('json-sass');

// Clear out build folders for fresh builds
gulp.task('jsonToSassColors', function () {
	// console.log("convert json to sass color variables");
	return fs.createReadStream( config.paths.globalsSrc + 'settings/colors.json')
	.pipe(jsonSass({
	    prefix: '/* DO NOT EDIT THIS FILE AS IT IS GENERATED CONTENT FROM "src/globals/settings/colors.json". */ \n $g-color: ',
	}))
	.pipe(fs.createWriteStream( config.paths.globalsSrc + 'sass/settings/_colors.scss'));
});
