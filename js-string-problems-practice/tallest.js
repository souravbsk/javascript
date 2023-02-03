function maxInArray(numbers) {
    let tallestNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number > tallestNumber) {
            tallestNumber = number;
        }
    }
    return tallestNumber
}





const heights = [167, 190, 120, 165, 137];
const tallest = maxInArray(heights);
console.log('tallest person is', tallest);



// lowest number 
function minInArray(numbers){
    let lowestNumber = numbers[0];
    for(let i = 0; i<numbers.length; i++){
        const number = numbers[i];
        if(number<lowestNumber){
            lowestNumber = number;
        }
    }
    return lowestNumber;
}

const LowerNumber = minInArray(heights);
console.log('Lowest Number' ,  LowerNumber);



function tallestFriend ( height ) {
    //Write your code here
      let tallestNum = height[0];
      for(let i = 0; i< height.length; i++){
        const numberElement = height[i];
        if(numberElement>tallestNum){
          tallestNum = numberElement
        }
      }
      return tallestNum
    //Don't forget to return
    }
    const numbers = [157,  134 , 188 ];
  const output =   tallestFriend(numbers);
  console.log(output);