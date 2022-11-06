const { run } = require("hardhat");

async function main() {

  const contractAddress = "0x1F9C71aDfE1adD566A6d93119d5c3FEe0D8e2B20"; 

  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: [],
      contract: "contracts/crowdfunding.sol:CrowdFactory",
    });
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!");
    } else {
      console.log(error);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
