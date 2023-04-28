import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-waffle";

const RECOVERY_PHRASE =
	"message day amazing gift morning spatial pen deer beef wood lunch kiwi brown often provide buffalo miracle coast rude cause badge fragile invite tomato";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

const config: HardhatUserConfig = {
	solidity: "0.7.0",

	networks: {
		fuji: {
			url: "https://api.avax-test.network/ext/bc/C/rpc",

			accounts: {
				mnemonic: RECOVERY_PHRASE,
			},
		},
	},
};

export default config;
