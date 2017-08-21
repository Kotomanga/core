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
        address tokenAddr;

        function SimpleWallet() {
          p = msg.sender;
        }

//FIGURE OUT WAY TO DISTRIBUTE TRANSACTION WITH Pe, Ce, msolPerWatt and not have one person controlling all the dials.
  function runCycle(uint amount) {
		SolCredits s = SolCredits(tokenAddr);
    //s.transfer(p, amount);
	}
}
