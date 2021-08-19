var TomToken = artifacts.require("./TomToken.sol");

module.exports = async function (deployer){
     await deployer.deploy(TomToken, 1000000);

}