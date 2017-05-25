var fs = require('fs');
var CoinKey = require('coinkey');

function walletImport(importWallet) {
var ck = CoinKey.fromWif(importWallet)

console.log(ck.privateKey.toString('hex')) // => c4bbcb1fbec99d65bf59d85c8cb62ee2db963f0fe106f483d9afa73bd4e39a8a
console.log(ck.publicAddress) // => DGG6AicS4Qg8Y3UFtcuwJqbuRZ3Q7WtYXv
console.log(ck.compressed) // => true
console.log(ck.privateKey)
}

function createAdress() {
var keyPair = bitcoin.ECPair.makeRandom()

// Print your private key (in WIF format)
console.log(keyPair.toWIF())
// => Kxr9tQED9H44gCmp6HAdmemAzU3n84H3dGkuWTKvE23JgHMW8gct

// Print your public key address
console.log(keyPair.getAddress())
// => 14bZ7YWde4KdRb5YN7GYkToz3EHVCvRxkF

walletImport(keyPair.toWIF());
        }

var transaction = function (secretWIF,recipientBitcoin,amount,prevTrans) {
        var tx = new bitcoin.TransactionBuilder()

        // Add the input (who is paying):
        // [previous transaction hash, index of the output to use]
        var txId = prevTrans
        tx.addInput(txId, 0)

        // Add the output (who to pay to):
        // [payee's address, amount in satoshis]
        tx.addOutput("recipientBitcoin", amount*100000000)

        // Initialize a private key using WIF
        var privateKeyWIF = secretWIF;
        var keyPair = bitcoin.ECPair.fromWIF(privateKeyWIF)

        // Sign the first input with the new key
        tx.sign(0, keyPair)

        // Print transaction serialized as hex
        console.log(tx.build().toHex());
        // => 0100000001313eb630b128102b60241ca895f1d0ffca21 ...
        return tx.build();
        // You could now push the transaction onto the Bitcoin network manually
        // (see https://blockchain.info/pushtx)
}

module.exports.transaction = transaction;
module.exports.newWallet = createAdress;
module.exports.importWallet = walletImport;
