require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy rule stick mistake good kangaroo army gentle'; 
let testAccounts = [
"0x38582c0046c5ffe664de526216a71a21dad4b5d5d8d983223ca17fc1a0a3221b",
"0xbe9fa9ffcd9b0d879fcff37ecff2a776e2de9462ae7197c410dc40be567ceb76",
"0x690fc4100a2d7bb9941fb2dbf1f86de2e81d531232e26afa6372b2c4429e6065",
"0x846c78efe99b6fc3bbf3465c3c4b44d99900be1db812f9e1a5d8e07999295a4c",
"0xa17ac38f6c79024bf9d1aa0626d840f53c8016ce06cb4d9cd4092e3007643e9b",
"0x68ba0e1c06db24b40ba4c87ca8ad83296034cb9815cdbcc177b4590437338171",
"0x81e673d0a957ccac597e4ac47f7ef5e4d41d94f7302040ae4fdebf8bd65a8df2",
"0x519df328e14070bddf11f0b63c24b3292d575d752812e37de2f2a3ca1aebc77c",
"0x7541eda2650a767dccd53f8de5ee9d742587f6f828c109fcedf137ba3b3aa232",
"0x4e8e0ed9e15cf110771c91893ed0f6660a24deda39c97d0e586716ea735d981d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


