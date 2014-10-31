NodeRSA = require \node-rsa
require! {fs, path}
key = new NodeRSA b: 256

encrypted = key.encrypt 'Hello, World!', \base64
console.log encrypted
decrypted = key.decrypt encrypted, \utf-8
console.log decrypted

console.log priv-key-pem = key.get-private-PEM!
console.log pub-key-pem = key.get-public-PEM!

key2 = new NodeRSA pub-key-pem
console.log enc2 = key2.encrypt 'Hello, World!', \base64
console.log enc2 = key2.encrypt 'Hello, World!', \base64
console.log enc2 = key2.encrypt 'Hello, World!', \base64
console.log enc2 = key2.encrypt 'Hello, World!', \base64

key3 = new NodeRSA priv-key-pem
console.log key3.decrypt enc2, \utf-8

/* output example:

isG1FAfq/rr001mMoiEBLeSRoSehIcUndd6vI5S+eKQ=
Hello, World!
-----BEGIN RSA PRIVATE KEY-----
MIGrAgEAAiEAlpIJ5LU2vqNVz0dC93lmpRcTMytgx0AkIVHTzKzZFLkCAwEAAQIg
PhZaHgTbXiDb8WzhIErfF/FVEzNs+L6n8EUZL1DvvUECEQDbOWllUa8uBdc07zhA
LDBvAhEAr9RJ66V8mjiFZ4beS1bRVwIRALsOEdBSEpfChA62z9hx3CECEQCQvLPM
4wDbAsPuILtEUUcpAhAFZWdRQkKyBvtX7pYKq8O5
-----END RSA PRIVATE KEY-----
-----BEGIN PUBLIC KEY-----
MDwwDQYJKoZIhvcNAQEBBQADKwAwKAIhAJaSCeS1Nr6jVc9HQvd5ZqUXEzMrYMdA
JCFR08ys2RS5AgMBAAE=
-----END PUBLIC KEY-----
g27MrCQz/Z1f81s7XEeUR6rXze1jwhywSV/XeNqofqM=
Xs58Li3SgFbZteRm9Ld/8O1fuGFqrN7/MWXGoE1WpUM=
PlVhogJwbGTcBfMhX8xUIeg8uDbrw1nzE5J2fYcc8SQ=
RuEhiQoJFuL/joBfelu/xJBDS9yNLE1ckx241aBBh/Q=
Hello, World!

*/
