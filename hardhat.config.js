require("@nomicfoundation/hardhat-toolbox");

const address = "0x26235442aCd1AbFb63c2D13C0da45C59a7e7a212";

const SONIC_PRIVATE_KEY =
  "0x5f9083ec154178591ae1198d4803fb3254cdf31d8eefcbfc69a347afbcf7abc5";

module.exports = {
  solidity: "0.8.28",
  networks: {
    sonic: {
      url: "https://rpc.blaze.soniclabs.com",
      accounts: [SONIC_PRIVATE_KEY],
    },
  },
};
