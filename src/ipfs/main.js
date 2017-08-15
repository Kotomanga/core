const IPFS = require('ipfs')
const node = new IPFS()

node.on('ready', () => {
  console.log('Your node is now ready to use \o/')
})

var ipfs = require('ipfs-api')('localhost', '5002', {protocol: 'http'});

/*
series([
  (cb) => node.on('ready', cb),
  (cb) => node.version((err, version) => {
    if (err) { return cb(err) }
    console.log('Version:', version.version)
    cb()
  })
])
*/

var swarm = function() {
ipfs.swarm.addrs(function (err, addrs) {
  if (err) {
    throw err
  }
  console.log(addrs)
})
}

var connect = function (addr) {
  ipfs.swarm.connect(addr, function (err) {
  if (err) {
    throw err
  }
  // if no err is present, connection is now open
})
}

var store = function (inputdata) {
  ipfs.add(inputdata, function(err, hash) {
    console.log(hash);
});
}

var display = function (hash) {
  ipfs.cat(hash, function(err, res) {
    if(err || !res) return console.error("ipfs cat error", err, res);
    if(res.readable) {
      console.error('unhandled: cat result is a pipe', res);
    } else {
      console.log(hash);
      return res;
    }
  });
}

module.exports.swarm = swarm;
module.exports.connect = connect;
module.exports.store = store;
module.exports.display = display;

console.log(store("Hello, World!"));
