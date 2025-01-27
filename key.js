const { Web3 } = require("web3");
// const web3 = new Web3();
const web3 = new Web3("http://localhost:8545"); // Replace with your provider URL

const account = web3.eth.accounts.create();
console.log("Address:", account.address);
console.log("Private Key:", account.privateKey);

const entropy = "my-random-entropy-string-with-32-characters";
const accountWithEntropy = web3.eth.accounts.create(entropy);
console.log("Address:", accountWithEntropy.address);
console.log("Private Key:", accountWithEntropy.privateKey);
