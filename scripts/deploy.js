async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Token = await ethers.getContractFactory("MyToken");
  const token = await Token.deploy(1000000);

  console.log("Token deployed to:", token);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
