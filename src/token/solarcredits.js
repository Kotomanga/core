contract solarCredits {
	/* This creates an array with all balances */
	mapping (address => uint256) public balanceOf;

	function solarCredits() {
		balanceOf[msg.sender] = 21000000;
	}
	
	/* Send coins */
	function transfer(address _to, uint256 _value) {
	    /* Add and subtract new balances */
	    balanceOf[msg.sender] -= _value;
	    balanceOf[_to] += _value;
	}
}
