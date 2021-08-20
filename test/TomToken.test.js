const TomToken = artifacts.require("TomToken");
var chai = require("chai");
const BN = web.utils.BN;
const chaiBN = require ("chai-bn")(BN);
chai.use(chaiBN);

var chaiAsPromised = require ("chai-as-promised");
chai.use(chaiAsPromised);

const expect = chai.expect;
contract ("Token Test", async (accounts) => {
    it ("all tokens should be in my account", async => {
            let instance = await TomToken.deployed();
            let totalSupply = await instance.totalSupply();
         
       
    })
}