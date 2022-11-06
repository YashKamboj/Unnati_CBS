const { run, ethers } = require("hardhat");

async function main() {
  //replace contractAddress with the one we saved above querying the 0th publishedProj
  const contractAddress = "0x1F9C71aDfE1adD566A6d93119d5c3FEe0D8e2B20"; //line5
  const args = [
    "first title", ethers.utils.parseUnits("0.1", 18), "description",
//Insert you wallet's public address here
"0xcf092E8bDCDC1FA8B15Ebeb9D97453D498067Df1",  //line 9

  ];

  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
      contract: "contracts/crowdfunding.sol:CrowdfundingProject",
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

