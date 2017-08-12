const IPFS = require('ipfs')
const node = new IPFS()

var ipfs = require('ipfs-api')();

var swarm = function {
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
  var toStore = inputdata;
  //TODO un-break this call:
  ipfs.add(new Buffer(toStore), function (err, res){
    if(err || !res) return console.error("ipfs add error", err, res);

    res.forEach(function(file) {
      console.log('successfully stored', file.Hash);
      display(file.Hash);
    });
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

document.getElementById('store').onclick=store;

module.exports.swarm = swarm;
module.exports.connect = connect;
module.exports.store = store;
module.exports.display = display;
