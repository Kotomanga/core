//sol
// Multi-party, anti-fraud, partial-wallet for buying and selling electricity.
// @authors:
// Kyler Chin , <kylerschin@gmail.com>
//
// usage:
// SolCredits can be deposited into this contract and only sent with each cycle by event approval.
// Funds can be refunded and withdrawn.
// P pays for all Tx Fees.
// Cycle times chosen by P.
// Trust is uniform
// Thus, Both parties are protected from fraud.
// Get a free potato! Have a great day in a great life!

pragma solidity ^0.4.13;

contract payment {
        address p;
        address c;
        string PId;
        string CId;
        address solcredits;

        event Confirmation(address owner, bytes32 operation);
        event Revoke(address owner, bytes32 operation);

//FIGURE OUT WAY TO DISTRIBUTE TRANSACTION WITH Pe, Ce, msolPerWatt and not have one person controlling all the dials.
  function runCycle()

    }

    function withdraw() {
        if (msg.sender.send(shares[msg.sender]))
            shares[msg.sender] = 0;
    }
}
