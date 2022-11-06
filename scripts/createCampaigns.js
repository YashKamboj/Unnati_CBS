const { ethers } = require("hardhat");

async function main() {
    const contract = await ethers.getContractAt("CrowdFactory",
    "0x1F9C71aDfE1adD566A6d93119d5c3FEe0D8e2B20") 
    
    await contract.createProject(
    "first title", 
    ethers.utils.parseUnits("0.1", 18), 
    "description", 
    "0xE1a5a8307489B0B4f52651feb3398277b000F395") 
    }
    
    main()
      .then(() => process.exit(0))
      .catch((error) => {
        console.error(error);
        process.exit(1);
      });