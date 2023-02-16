const lyrics = 'Tumi bondu kala pakhi';
console.log(lyrics.slice(0,5));
// Tumi
console.log(lyrics.slice(5,8));
// bon

console.log(lyrics.slice(-4));
// akhi
console.log(lyrics.slice(-5,-2));
// pak


// concat 

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"