const fs = require('fs');
const solc = require('solc');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const input = fs.readFileSync('./contracts/solCredits.sol');
console.log(input);
console.log("Compiling Source Code")
const output = solc.compile(input.toString(), 1);
const bytecode = output.contracts['solCredits'].bytecode;
const abi = JSON.parse(output.contracts['solCredits'].interface);

const contract = web3.eth.contract(abi);

function testContract(address) {
    // Reference to the deployed contract
    const token = contract.at(address);
    // Destination account for test
    const dest_account = '0x4e6d1f6d5448dc45a763d8ba66106f7e161d4efe';

    // Assert initial account balance, should be 100000
    const balance1 = token.balances.call(web3.eth.coinbase);
    console.log(balance1 == 1000000);

    // Call the transfer function
    token.transfer(dest_account, 100, {from: web3.eth.coinbase}, (err, res) => {
        // Log transaction, in case you want to explore
        console.log('tx: ' + res);
        // Assert destination account balance, should be 100
        const balance2 = token.balances.call(dest_account);
        console.log(balance2 == 100);
    });
}
