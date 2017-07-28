//DO NOT USE - THIS IS A EXAMPLE
//YOU HAVE BEEN WARNED
// creation of contract object

//get contract from Solidity file solCredits.sol:
function generateToken() {
const fs = require("fs");
const solc = require('solc');

var nodeAddress = "http://localhost:8545";
const web3 = new Web3(new Web3.providers.HttpProvider(nodeAddress));
const input = fs.readFileSync('solCredits.sol', 'utf8');
const output = solc.compile(input.toString(), 1);
console.log("Output:" + output);
const bytecode = output.contracts['Token'].bytecode;
const abi = JSON.parse(output.contracts['Token'].interface);
const contract = web3.eth.contract(abi);

const contractInstance = contract.new({
    data: '0x' + bytecode,
    from: web3.eth.coinbase,
    gas: 90000*2
}, (err, res) => {
    if (err) {
        console.log(err);
        return;
    }

    // Log the tx, you can explore status with eth.getTransaction()
    console.log(res.transactionHash);

    // If we have an address property, the contract was deployed
    if (res.address) {
        console.log('Contract address: ' + res.address);
        // Let's test the deployed contract
        testContract(res.address);
    }
});


}
