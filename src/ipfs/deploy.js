const IPFS = require('ipfs')
const node = new IPFS()
const async = require("async")
async.map(
    ['index.js','package.json','npm-shrinkwrap.json'],
    require("fs").stat,
    (err, results) => console.log(results)
);

node.on('ready', () => {
  // Your node is now ready to use \o/
  console.log("IPFS ONLINE");
  // stopping a node
  node.stop(() => {
    // node is now 'offline'
  })
})

//Function pass input and return hash
var deployIpfs = function(input) {
  series([
    (cb) => node.on('ready', cb),
    (cb) => node.version((err, version) => {
      if (err) { return cb(err) }
      console.log('Version:', version.version)
      ipfsVersion = 'Version:', version.version;
      cb()
    }),
    (cb) => node.files.add({
      content: Buffer.from(input)
    }, (err, result) => {
      if (err) { return cb(err) }

      console.log('\nAdded file:', result[0].path, result[0].hash)
      fileMultihash = result[0].hash
      //return hash to function
      return(result[0].hash);
      // cb()
    }),
    (cb) => node.files.cat(fileMultihash, (err, stream) => {
      if (err) { return cb(err) }

      console.log('\nFile content:')
      stream.pipe(process.stdout)
      stream.on('end', process.exit)
    })
  ])
}
