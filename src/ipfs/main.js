const IPFS = require('ipfs')
const node = new IPFS()

function deploy (data) {
  ipfs.files.add(
    {
      path: '',
      content: "content"
    },
     [options], [callback])
}

module.exports.deploy = deploy;
