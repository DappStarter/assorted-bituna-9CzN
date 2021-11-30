require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose swift top edge rare remain essay inner problem obscure gesture'; 
let testAccounts = [
"0xb1312cc6917d3e55e91c7bda522b8dc9e52fe975f13b96a369d1bdde45d2b70a",
"0xebfca3725c967e2aaf516d22efd83b6503eeb2dac43796d7d412adce5802be80",
"0x8e4be71b7175f441809c3fb67c6a35f183b2b454211c6d13e63e188ceeba6a6b",
"0xb8d5ddfbd8269cb701baed87ed57a9ea9013fdad2baf6f26412739d9d9cf1585",
"0x8ad83903269d0134f2452ede3bf494f6d6d769460e9f127126c75cf155b079f8",
"0x474b389b163a7fff8473f8b8267548b4150f3fea0b1fed7e199e03e734454dc4",
"0x97d8b4d6d0a7d65150194035950ec16c5a318004e0001c8cf64e9aeee9015a16",
"0xa26b7eb4000acbb4fa96eea2bb18edd7cd9b8d2f042a077c7f055a6f4fe945ba",
"0x1da0c669f3834c8682ff0fe94289d585abad08cc558add4840ed20b97ef5a59f",
"0xec6bfbddda42d5d3abb78e4b652f84f173e23a61a6ef569314b191c79431b100"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

