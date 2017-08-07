pragma solidity ^0.4.11;

import "zeppelin-solidity/contracts/token/PausableToken.sol";
import "zeppelin-solidity/contracts/token/MintableToken.sol";
import "./BurnableToken.sol";

contract SomeToken is BurnableToken, PausableToken, MintableToken {

contract SOMETHINGToken is {

    string public constant symbol = "SHORT-SYMBOL";

    string public constant name = "SOLARIOT BLAH BLAH";

    uint8 public constant decimals = 18;

    function burn(uint256 _value) whenNotPaused public {
        super.burn(_value);
    }
}
