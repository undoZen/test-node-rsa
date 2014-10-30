NodeRSA = require \node-rsa
require! {fs, path}
key = new NodeRSA b: 512

encrypted = key.encrypt 'hello', \base64
console.log encrypted
decrypted = key.decrypt encrypted, \utf-8
console.log decrypted

console.log key.get-private-PEM!
console.log key.get-public-PEM!
