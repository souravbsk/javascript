/* 
fundamentals
1.1 variable (let,const) three types variable
1.2 condition (<,>,===, !==, <=,>=) && || , if-else, else-if
1.3 array: declare, length, index, push, pop, indexOf, includes
1.4 for loop, while
1.5 function return parameter
1.6 Object property, including array, object
______________________________________________
ES6
1.template string ${}
2. spread(...) 
    2.1 copy an array then add a new element to an array
    2.2 use filter to remove an element from an array
3. arrow function
    3.1 no parameter ()
    3.2 single parameter
    3.3 multiple parameter ()
    3.4 multi line

4. destructuring: object destructuring, array destructuring
5. object declare shorthand
6.function parameter default value;
7. Optional chaining (?.)
__________________________________
Browser API
1. local storage session storage
2. location API
3. History ApI
4.Fetch
___________________________
Others
1.array : map, forEach,filter, find
2.ternary operator
3. logical and logical or && ||
4. JSON(stringify,parse)
*/

const name = 'alien';
const prof = 'developer';
const Bio = {
    name : name,
    prof: prof
}
console.log(Bio);
// { name: 'alien', prof: 'developer' }

// short cut way tor create object 
const bioShortHand = {name,prof};
console.log(bioShortHand);
// { name: 'alien', prof: 'developer' }