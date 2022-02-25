const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");
require('dotenv').config({path: './.env'});
const MetaMaskAccountIndex = 0;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      network_id: "*",
      host: "127.0.0.1",
      port: 7545,
    },
    ganache_local: {
      provider: function() {
          return new HDWalletProvider(process.env.MNEMONIC, "http://127.0.0.1:7545", MetaMaskAccountIndex )
      },
      network_id: "*"
    },
  },
  compilers: {
    solc: {
      version:"^0.8.10"
    }
  }
};
