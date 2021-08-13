const { version } = require("../package.json");
const mainnet = require("./tokens/mainnet.json");
const ropsten = require("./tokens/ropsten.json");
const rinkeby = require("./tokens/rinkeby.json");
const goerli = require("./tokens/goerli.json");
const kovan = require("./tokens/kovan.json");
const dtc = require("./tokens/dtc.json");

module.exports = function buildList() {
    const parsed = version.split(".");
    return {
        name: "DTCSwap Default List",
        timestamp: new Date().toISOString(),
        version: {
            major: +parsed[0],
            minor: +parsed[1],
            patch: +parsed[2],
        },
        tags: {},
        logoURI: "https://dtc-swap.oss-ap-southeast-1.aliyuncs.com/logo.svg",
        keywords: ["dtcswap", "default"],
        tokens: [...mainnet, ...ropsten, ...goerli, ...kovan, ...rinkeby, ...dtc]
            // sort them by symbol for easy readability
            .sort((t1, t2) => {
                if (t1.chainId === t2.chainId) {
                    return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
                }
                return t1.chainId < t2.chainId ? -1 : 1;
            }),
    };
};