const IPFS = require('ipfs')
const node = new IPFS()

node.on('ready', () => {
  // Your node is now ready to use \o/
  console.log("IPFS ONLINE");
  // stopping a node
  node.stop(() => {
    // node is now 'offline'
  })
})

series([
  (cb) => node.on('ready', cb),
  (cb) => node.version((err, version) => {
    if (err) { return cb(err) }
    console.log('Version:', version.version)
    cb()
  })
])

var deployIpfs = function(input) {
  //Add string "input" to node
    (cb) => node.files.add({
      content: Buffer.from(input)
    }, (err, result) => {
      if (err) { return cb(err) }

      // Once the file is added, we get back an object containing the path, the
      // multihash and the sie of the file
      console.log('\nAdded file:', result[0].path, result[0].hash)
      fileMultihash = result[0].hash
      cb()
})
//Return hash value to function
//This will be passed back into the blockchain
return(result[0].hash);

//read the string back
(cb) => node.files.cat(fileMultihash, (err, stream) => {
  if (err) { return cb(err) }

  console.log('\nFile content:')
  // print the file to the terminal and then exit the program
  stream.pipe(process.stdout)
  stream.on('end', process.exit)
})
}
