var TomToken = artifacts.require("./TomToken.sol");
var MyTokenSales = artifacts.require("./MyTokenSale.sol");
var KycContract = artifacts.require("./KycContract.sol")


module.exports = async function(deployer) {
let addr = await web3.eth.getAccounts();
await deployer.deploy(TomToken, 1000000000);
await deployer.deploy(KycContract);
await deployer.deploy(MyTokenSales, 1, addr[0], TomToken.address, KycContract.address);
let tokenInstance = await TomToken.deployed();
await tokenInstance.transfer(MyTokenSales.address, 1000000000);
};