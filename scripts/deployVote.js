// Import ethers from Hardhat package
const { ethers } = require("hardhat");

async function main() {
    // Get the contract factory
    const Vote = await ethers.getContractFactory("Vote"); // ✅ Correct name

    // Deploy the contract
    const vote = await Vote.deploy(); // ✅ Correct deployment

    // Wait for the contract to be deployed
    await vote.waitForDeployment(); // ✅ Correct method to use

    // Get the contract address
    console.log("Vote Contract deployed to:", await vote.getAddress());
}

// Run the main function
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
