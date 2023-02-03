const lyrics = 'Tumi bondu kala pakhi ami jeno ki bosonto kale tumay bolte pari ni';

// console.log(lyrics.includes('kala'));
// true 
// console.log(lyrics.includes('sada'));
// false

// case sensitive issue___________
// console.log(lyrics.includes('pakhi Ami'));
// false

// best practice 
const lowerCaseLyrics = lyrics.toLowerCase();
const searchWord  = 'Bosonto Kale';
const lowerCaseSearchWord = searchWord.toLowerCase();

console.log(lowerCaseLyrics.includes(lowerCaseSearchWord));
// true

const directSearch = lyrics.toLowerCase().includes(searchWord.toLowerCase())
console.log(directSearch);
// true



// index of _______________________________
// we can find search result with index of 
console.log(lyrics.indexOf('pakhi'));
if(lyrics.indexOf('pakhi') !== -1){
    console.log('search value exist');
}
else{
    console.log('search value doesnot exist');
}
// search value exist

// !== -1 means exist the value in string 


