const { ethers } = require("hardhat");

async function main() {
  const CrowdFactory = await ethers.getContractFactory("CrowdFactory");
  
  const crowd = await CrowdFactory.deploy(); // Instance of the contract
  await crowd.deployed();
  console.log("Contract deployed to address:", crowd.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });