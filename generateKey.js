const Web3 = require('web3');
var fs = require('fs');

let client = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1'))
let account = client.eth.accounts.create()
console.log(account)
fs.writeFile(`${account.address}.log`,JSON.stringify(account), () => console.log(`Successfully created key for ${account.address}`))
