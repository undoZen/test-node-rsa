// Generated by LiveScript 1.3.1
var NodeRSA, fs, path, key, encrypted, decrypted, privKeyPem, pubKeyPem, key2, enc2, key3, key4, key5, enc3;
NodeRSA = require('node-rsa');
fs = require('fs');
path = require('path');
key = new NodeRSA({
  b: 512
});
encrypted = key.encrypt('Hello, World!', 'base64');
console.log(encrypted);
decrypted = key.decrypt(encrypted, 'utf-8');
console.log(decrypted);
console.log(privKeyPem = key.getPrivatePEM());
console.log(pubKeyPem = key.getPublicPEM());
key2 = new NodeRSA(pubKeyPem);
console.log(enc2 = key2.encrypt('Hello, World!', 'base64'));
console.log(enc2 = key2.encrypt('Hello, World!', 'base64'));
console.log(enc2 = key2.encrypt('Hello, World!', 'base64'));
console.log(enc2 = key2.encrypt('Hello, World!', 'base64'));
key3 = new NodeRSA(privKeyPem);
console.log(key3.decrypt(enc2, 'utf-8'));
key4 = new NodeRSA('-----BEGIN RSA PRIVATE KEY-----\nMIICWwIBAAKBgQCq/hBbvHdQvbulhnGTkkz0E56mQ0wUm3E0tIvGno6Oelj8XHYt\nDvN9NtSW0QfTOldlHtUZp2Z5Rz+2qYY4cny5Y+6MlnCj6cBIEA8Ni8ZYYJx8joJ5\nX0jKCs+jOwXqq1Mk+o9S63gLDQx4rsdJ5Gp3H+oy6EFpVYs7dpjPw+dHFwIDAQAB\nAoGAdUIQ2bfeYoIaAiK2FCrJlr81lnKj46XM9gWxrJziyZXhG/4UFEYid4V4N4xU\nv2dMs013eUYwoY5YhNyv7FmmaSQBHx74LMm/cIzDVaQwL+/wf4NXVyCN/uCZGhHE\nAbd6Sud0YyswJ1n3XmKuuUdYdmc2F2F6VxKkFf1owBPQSXECQQDhNdSkdxt7K2AM\nPCozDRGS57ZuvAnqZ45iBfyGpyPpcQWdcAwpqNvOgBZLsRjRhoW4sfsk3Ji2hMAb\nF6naTUwVAkEAwl6nm5+3Vc1AcStWOxq0ReH7edbNvb1WsLSg2AoiI6RWyh4t3fDv\n9WHDXAFyPP+YCudW4ObhKE8sbu+RFu4VewJAcc1+56DcfTAc9/HLLUL0V3TJpklV\nBWNQ+s2lnvGE3yjiunztWHvgnwfwvE0AiphcqEkf7K+gZ9LLNKWPiiW3RQJAb7jE\nknk9gj4WOnZ0fEifMkPwrlm/rL42JB/PDB7W/LGriUXLi3TAGMV2612Rcmpf1HSg\nxWkwJmFL4wAk348+HQJAN8L36kWv2WWmfKmq9h+1feCECpr9pY2YTherzr/DVGNU\nz1Ajm4/ajYQuPcrrpMfb780WldAHdJONqDjmJIET1A==\n-----END RSA PRIVATE KEY-----');
console.log(key4.getPrivatePEM());
console.log(key4.getPublicPEM());
key5 = new NodeRSA('-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCq/hBbvHdQvbulhnGTkkz0E56m\nQ0wUm3E0tIvGno6Oelj8XHYtDvN9NtSW0QfTOldlHtUZp2Z5Rz+2qYY4cny5Y+6M\nlnCj6cBIEA8Ni8ZYYJx8joJ5X0jKCs+jOwXqq1Mk+o9S63gLDQx4rsdJ5Gp3H+oy\n6EFpVYs7dpjPw+dHFwIDAQAB\n-----END PUBLIC KEY-----');
console.log(key5.getPublicPEM());
console.log(enc3 = key5.encrypt('Hello, World!', 'base64'));
console.log(key4.decrypt(enc3, 'utf-8'));
/* output example:

C27WWBkJ6zXgA8TRGG97tjPoY+KIkQJ6RbP36kD8jgRBTBfI2yFdbJfgELwzC/8Fr8TZP/uRCTgQseAGTUh+qQ==
Hello, World!
-----BEGIN RSA PRIVATE KEY-----
MIIBOgIBAAJBAJ1IbvR3XKbmqEpNzDdY9E+Ad919R3hZ7JlboWQ8XFq6I0DH6oAv
korqvmN87O50AUxlFTzsTryDdf8EQPgUp30CAwEAAQJAM02KK6G3jhVUtY/02eTh
JAGSl6OiqWYjn85csXZi5ZCoutH8MlSy8CbJqO1A9XbWeL5BVp+c4blQz/eim1hT
HQIhAMym07LaYASBKPmD2/ZEluaDs1vaQxRZ8W3YtDWg+ZPHAiEAxL8FgoCwIMBp
C38VWstA+A9geDE6EMc1xzomlApqYpsCIQCPxyj1/7vzjjaWThBMTVXi72YkQwxb
kPEwZk39W3HcYwIgOD/o4lvKf0Kjhb7qqw+rXoB+8z4XvM5HqNMOTor/yXsCIHiM
m4WPdJZgqiSltUcUnVUcO2Z2a8DNyD8JA5/EBINH
-----END RSA PRIVATE KEY-----
-----BEGIN PUBLIC KEY-----
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJ1IbvR3XKbmqEpNzDdY9E+Ad919R3hZ
7JlboWQ8XFq6I0DH6oAvkorqvmN87O50AUxlFTzsTryDdf8EQPgUp30CAwEAAQ==
-----END PUBLIC KEY-----
MZtfG64IdzkgDgee8qxgnR6gw3UJckVlfYKj4Gax+b2Znps/1lRxJyhAUEouIP84VBvkDWQqKN5iT7ZhxtwGow==
MGu7VMqG955IWMcgBycAO7hVSECQzCyvlOlEoHJKt486UvdKbXPJ0pN4p+Vu4I+yciODRUHGDcCsCu7XzaeuVg==
iUPEgRH3bfmMQ1GmlCV33u0rAScJCuz+bUQGmIf/Btxu8Ktbw5v+8g3ZXzHB3uWZZzItBhHdaPRU7nBNiMyV5Q==
YPkOkGNGIZ9nvbRmUMNyrAQo/V5IRUc6wC6QBvt8PwgRSgGKzRypIurB+FVnwco9Z9h123IthFSl0nw4udPP0g==
Hello, World!
-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgQCq/hBbvHdQvbulhnGTkkz0E56mQ0wUm3E0tIvGno6Oelj8XHYt
DvN9NtSW0QfTOldlHtUZp2Z5Rz+2qYY4cny5Y+6MlnCj6cBIEA8Ni8ZYYJx8joJ5
X0jKCs+jOwXqq1Mk+o9S63gLDQx4rsdJ5Gp3H+oy6EFpVYs7dpjPw+dHFwIDAQAB
AoGAdUIQ2bfeYoIaAiK2FCrJlr81lnKj46XM9gWxrJziyZXhG/4UFEYid4V4N4xU
v2dMs013eUYwoY5YhNyv7FmmaSQBHx74LMm/cIzDVaQwL+/wf4NXVyCN/uCZGhHE
Abd6Sud0YyswJ1n3XmKuuUdYdmc2F2F6VxKkFf1owBPQSXECQQDhNdSkdxt7K2AM
PCozDRGS57ZuvAnqZ45iBfyGpyPpcQWdcAwpqNvOgBZLsRjRhoW4sfsk3Ji2hMAb
F6naTUwVAkEAwl6nm5+3Vc1AcStWOxq0ReH7edbNvb1WsLSg2AoiI6RWyh4t3fDv
9WHDXAFyPP+YCudW4ObhKE8sbu+RFu4VewJAcc1+56DcfTAc9/HLLUL0V3TJpklV
BWNQ+s2lnvGE3yjiunztWHvgnwfwvE0AiphcqEkf7K+gZ9LLNKWPiiW3RQJAb7jE
knk9gj4WOnZ0fEifMkPwrlm/rL42JB/PDB7W/LGriUXLi3TAGMV2612Rcmpf1HSg
xWkwJmFL4wAk348+HQJAN8L36kWv2WWmfKmq9h+1feCECpr9pY2YTherzr/DVGNU
z1Ajm4/ajYQuPcrrpMfb780WldAHdJONqDjmJIET1A==
-----END RSA PRIVATE KEY-----
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCq/hBbvHdQvbulhnGTkkz0E56m
Q0wUm3E0tIvGno6Oelj8XHYtDvN9NtSW0QfTOldlHtUZp2Z5Rz+2qYY4cny5Y+6M
lnCj6cBIEA8Ni8ZYYJx8joJ5X0jKCs+jOwXqq1Mk+o9S63gLDQx4rsdJ5Gp3H+oy
6EFpVYs7dpjPw+dHFwIDAQAB
-----END PUBLIC KEY-----
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCq/hBbvHdQvbulhnGTkkz0E56m
Q0wUm3E0tIvGno6Oelj8XHYtDvN9NtSW0QfTOldlHtUZp2Z5Rz+2qYY4cny5Y+6M
lnCj6cBIEA8Ni8ZYYJx8joJ5X0jKCs+jOwXqq1Mk+o9S63gLDQx4rsdJ5Gp3H+oy
6EFpVYs7dpjPw+dHFwIDAQAB
-----END PUBLIC KEY-----
cBUX+NuWK3zouQsdFk2W9V/2uQ1Abs78qSDgBZXC/IclVikAp+UFTed4sCugZo2jmD0E41fpVUmzs6ldsHgf8Pm5srIKpqjR9JmHuibACGpXq6Z19Mt3Yzwu/QAapjmWCpgtlL2Js7mBHVyUrsupByMT8Pr6/WWkNZHNYkwTpFk=
Hello, World!

*/