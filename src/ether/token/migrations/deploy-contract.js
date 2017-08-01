var solCredits = artifacts.require("./solCredits.sol");

module.exports = function(deployer) {
  deployer.deploy(owned);
  deployer.deploy(tokenRecipient);
  deployer.deploy(solCredits);
};
