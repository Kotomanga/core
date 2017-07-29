var Web3 = require('web3');
var web3 = new Web3();

var fs = require('fs');
const peer = require('./src/peering');
const power = require('./src/power');
const ether = require('./src/ether/main');
const ipfs = require('./ipfs/main');

console.log("Hello, World!");
console.log("Go read our Whitepaper at https://solariot.org or look at the TODO.md and CONTRIBUTING.md");
console.log("Licensed under the GPL-3");

console.log()
