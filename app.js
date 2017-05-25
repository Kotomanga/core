var fs = require('fs');
const bitcoin = require('./src/bitcoin');
const ledger = require('./src/ledger');
const peer = require('./src/peering');
const power = require('./src/power');
const admin = require('./src/connect');

admin.start(3000);
