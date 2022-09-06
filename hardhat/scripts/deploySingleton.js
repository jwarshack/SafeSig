// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {

  const MultiSig = await hre.ethers.getContractFactory("MultiSigWallet");
  const multiSig = await MultiSig.deploy(["0x4a4fD96907e817565D74Cf384418b0885A53bbcD","0xbE00E9aC7B3E867E8f8A2c652ac1fa60613f2a9C", "0xdAC13042229bB1EA919368eddA8A06d05bBA4560"], 2);

  await multiSig.deployed();

  console.log("MultiSig deployed to:", multiSig.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
