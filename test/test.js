const { ethers } = require("ethers");

async function transferTokens() {
  const provider = new ethers.JsonRpcProvider();
  const [owner] = provider.getSigner();
  const tokenAddress = "0x5d28C66aB766c39ee87C5E7D906022Ae5d5E5299";
  const Token = await ethers.getContractAt("MyToken", tokenAddress);

  const recipient = "0x26235442aCd1AbFb63c2D13C0da45C59a7e7a212";
  const amount = ethers.parseUnits("100", 18);

  const tx = await Token.transfer(recipient, amount);
  await tx.wait();

  console.log(`Transferred ${amount} tokens to ${recipient}`);
}

transferTokens()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
