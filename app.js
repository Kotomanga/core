var fs = require('fs');
//const bitcoin = require('./src/bitcoin');
const ledger = require('./src/ledger');
const peer = require('./src/peering');
const power = require('./src/power');
const admin = require('./src/connect/start');
const ether = require('./src/ether/main');

function readConfig(yat) {
var configOutput = fs.readFileSync(yat, 'utf-8');
console.log(configOutput);
}
readConfig('config.json');
admin.start(3000);
