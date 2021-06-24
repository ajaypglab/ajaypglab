#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
	title: `Welcome CLI`,
	tagLine: `by Ajay PG`,
    description: pkgJSON.description,    
	bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
	version: pkgJSON.version
});

console.log(`Welcome, Ajay PG Lab.
This is my first CLI project!`);