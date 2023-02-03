function reverse(text){
let reverseText = '';
for(let i = text.length - 1; i>=0; i--){
    const wordElement = text[i];
    reverseText = reverseText + wordElement
}
console.log(reverseText);
}

const myText = 'hey i want to be a js programmer';
reverse(myText)


// word reverse 

function wordReverse(word){
    const wordText = word.split(' ')
    let wordReverse =[];
 for(let i = wordText.length - 1; i>=0; i--){
    const wordElement = wordText[i];
    wordReverse.push(wordElement)
 }
 const wordJoin = wordReverse.join(' ');
 console.log(wordJoin);
}

wordReverse(myText)


function add(a, b){
    return a + b;
  }
  console.log(add("adam" + "eve"))
//   adameveundefined