function secondLargest(text) {
    let largest = "";
    let secondLargest = "";
    for (let i = 0; i < text.length; i++) {
        let currentString = text[i];

        if (currentString.length > largest.length) {
            secondLargest = largest;
            largest = currentString;
        } else if (currentString.length > secondLargest.length) {
            secondLargest = currentString;
        }
    }

return  (secondLargest);
}
const friends = ['neymar junior', 'vini', 'alison brekers', 'cristiano ronaldo','ronaldinho']
 const secondeBiggestElement  = secondLargest(friends);
 console.log(secondeBiggestElement);



 function checkTriangle(side1, side2, side3){
    //write your code here
    let output;
    if(side1 === side2 && side1 === side3 && side2 === side3){
         output =  "No"
       }
       else if(side1 === side2 || side1 === side3 || side2 === side3){
          output = 'Yes'
        }
         else{
           output = 'No'
         }
   return output
    //don't forget to write return
    }
   const result =  checkTriangle(9,8,9)
console.log(result);