var solCredits = artifacts.require("./solCredits.sol");

module.exports = function(deployer) {
  deployer.deploy(solCredits);
};
