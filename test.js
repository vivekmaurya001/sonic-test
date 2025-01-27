const { ethers } = require("ethers");
const dexAbi = require("./data.json");

// Initialize provider and contract
const provider = new ethers.JsonRpcProvider("https://rpc.blaze.soniclabs.com");
const dexAddress = "0x0b6881d42FDE00A603A76D3fF9d1D1E4C8cc0B5c";

const dexContract = new ethers.Contract(dexAddress, dexAbi, provider);

// Function to get all pools
async function getAllPools() {
    try {
        const pools = await dexContract.getPools(); // Assuming getPools is a function in the DEX contract
        console.log("Pools:", pools);
    } catch (error) {
        console.error("Error fetching pools:", error);
    }
}

getAllPools();
