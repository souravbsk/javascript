function reverseWord(text){
    let reverseStr = '';
    for(let i = text.length-1; i>=0; i--){
        const textIndex =  text[i]
        reverseStr += textIndex
    }
    return reverseStr
}

const myString = 'I am a good boy';
const reversed = reverseWord(myString);
console.log(reversed);