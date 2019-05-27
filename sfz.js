#!/usr/bin/env node

const exec = require('executive');

const args = process.argv;
console.log('Hello World!', args);

exec([
    'npm -v',
    'node -v',
    'sfdx -v'
]);