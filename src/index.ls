NodeRSA = require \node-rsa
require! {fs, path}
key = new NodeRSA b: 256

encrypted = key.encrypt 'Hello, World!', \base64
console.log encrypted
decrypted = key.decrypt encrypted, \utf-8
console.log decrypted

console.log key.get-private-PEM!
console.log key.get-public-PEM!

/* output example:

0JewaJKCO1X9E2yhePwd2XVeyNCDZtaE2uZfcZ2L9VA=
Hello, World!
-----BEGIN RSA PRIVATE KEY-----
MIGsAgEAAiEA5m7p2VCdmrkRWvdZmhaZk8NgJTH854QUZxlB/BD/GbkCAwEAAQIh
AJTe6y1+q5OeJNxEGRs3ppdaL+2JhYGWRC/A/tMvJ0ERAhEA9q+Hd/QJ/VLMRke7
oPcpCwIRAO8iSb89f2YrCja//RHpassCEQDvzRpHhTfgxghFmZ3Pj/SZAhAQjvVA
UsfRkUVhySWC6gDFAhEA0S6UMqUSxMvJvSSiVLR5fA==
-----END RSA PRIVATE KEY-----
-----BEGIN PUBLIC KEY-----
MDwwDQYJKoZIhvcNAQEBBQADKwAwKAIhAOZu6dlQnZq5EVr3WZoWmZPDYCUx/OeE
FGcZQfwQ/xm5AgMBAAE=
-----END PUBLIC KEY-----


*/
