const IPFS = require('ipfs')
const node = new IPFS()

var ipfs = require('ipfs-api')();

function store(inputdata) {
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

function display(hash) {
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

module.exports.deploy = deploy;
