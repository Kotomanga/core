pragma solidity ^0.4.13;

contract payment {
  struct TxStats { // Struct
        uint cycleTime;
        address _p;
        address _c;
        string _PId;
        string _CId;
    }

  function createSlowAllowance() {

  }

  function runCycle(
        uint _Pe,
        uint _Ce,
    ) {
        producer = _Pe;
        consumer = _ce;
    }
}
