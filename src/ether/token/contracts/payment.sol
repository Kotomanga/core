pragma solidity ^0.4.13;

contract payment {
        uint cycleTime;
        address p;
        address c;
        string PId;
        string CId;

  function createSlowAllowance() {

  }

//FIGURE OUT WAY TO DISTRIBUTE TRANSACTION WITH Pe, Ce, msolPerWatt and not have one person controlling all the dials.
  function runCycle(
        //uint Pe,
        //uint Ce,
        //uint msolPerwatt,
        address addrSC
    ) {
      function f2(address addrSC) returns(uint) {
        SolCredits solcredits = SolCredits(addrSC);
        //call SolCredits contract with "solcredits.someidioticfunction()"
        solcredits.transferFrom(p,c,amount);

    }
}
