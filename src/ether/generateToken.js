//DO NOT USE - THIS IS A EXAMPLE
//YOU HAVE BEEN WARNED
// creation of contract object

//get contract from Solidity file solCredits.sol:
const fs = require("fs");
const solc = require('solc')

let source = fs.readFileSync('solCredits.sol', 'utf8');
let compiledContract = solc.compile(source, 1);
let abi = compiledContract.contracts['nameContract'].interface;
let bytecode = compiledContract.contracts['nameContract'].bytecode;
let gasEstimate = web3.eth.estimateGas({data: bytecode});
let MyContract = web3.eth.contract(JSON.parse(abi));

var myContractReturned = MyContract.new(param1, param2, {
   from:mySenderAddress,
   data:bytecode,
   gas:gasEstimate}, function(err, myContract){
    if(!err) {
       // NOTE: The callback will fire twice!
       // Once the contract has the transactionHash property set and once its deployed on an address.

       // e.g. check tx hash on the first call (transaction send)
       if(!myContract.address) {
           console.log(myContract.transactionHash) // The hash of the transaction, which deploys the contract

       // check address on the second call (contract deployed)
       } else {
           console.log(myContract.address) // the contract address
       }

       // Note that the returned "myContractReturned" === "myContract",
       // so the returned "myContractReturned" object will also get the address set.
    }
  });

// Deploy contract syncronous: The address will be added as soon as the contract is mined.
// Additionally you can watch the transaction by using the "transactionHash" property
var myContractInstance = MyContract.new(param1, param2, {data: myContractCode, gas: 300000, from: mySenderAddress});
myContractInstance.transactionHash // The hash of the transaction, which created the contract
myContractInstance.address // undefined at start, but will be auto-filled later

//deploy contract.
//DANGER! MONEY AT HAND!

//creation of contract
var deploySol = web3.eth.contract(abi);

// initiate contract for an address
var deploySolInstance = deploySol.at(userAddress);

var result = deploySolInstance.myConstantMethod('myParam');
console.log(result) // '0x25434534534'

deploySolInstance.myStateChangingMethod('someParam1', 23, {value: 200, gas: 2000}, function(err, result){ ... });

//BLAH
// short hand style
//WHAT THE HELL DAS THIS MEAN?
//web3.eth.contract(abi).at(useraddress).myAwesomeMethod(...);

/*
create filter
var filter = deploySolInstance.myEvent({a: 5}, function (error, result) {
if (!error)
   console.log(result);
    {
        address: '0x8718986382264244252fc4abd0339eb8d5708727',
        topics: "0x12345678901234567890123456789012", "0x0000000000000000000000000000000000000000000000000000000000000005",
        data: "0x0000000000000000000000000000000000000000000000000000000000000001",
        ...
    }

});*/
//BLAh
