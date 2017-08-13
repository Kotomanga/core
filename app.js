var Web3 = require('web3');
var web3 = new Web3();

var fs = require('fs');
const peer = require('./src/peering');
const power = require('./src/power');
const ether = require('./src/ether/main');
const ipfs = require('./src/ipfs/main');

console.log("Hello, World!");
console.log("Go read our Whitepaper at https://solariot.xyz or look at the TODO.md and CONTRIBUTING.md");
console.log("Licensed under the GPL-3");
console.log("Created by Kyler Chin and Ethan Horoschak");

console.log(ipfs.swarm)
//console.log(ipfs.store("Hello, World!"));
