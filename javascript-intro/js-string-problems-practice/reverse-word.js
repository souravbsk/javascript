function reverseWord(text){
    const splitText = text.split(' ');
    let reverseStr = [];
    for(let i = splitText.length-1; i>=0; i--){
        const textIndex =  splitText[i]
        console.log(textIndex);
        reverseStr.push(textIndex)
    }
    const reverseJoin = reverseStr.join(' ');
    return reverseJoin
}

const myString = 'I am a good boy';
const reversed = reverseWord(myString);
console.log(reversed);

// boy good a am I