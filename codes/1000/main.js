const fs = require('fs');

const [a, b] = fs.readFileSync('/dev/stdin', 'utf8').split(' ');
console.log(Number(a) + Number(b));
