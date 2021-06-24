#!/usr/bin/env node
const welcome = require('cli-welcome');

welcome({
	title: `Welcome CLI`,
	tagLine: `by Ajay PG`,
	bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
	version: `v1.0`
});

console.log(`Welcome, Ajay PG Lab.
This is my first CLI project!`);