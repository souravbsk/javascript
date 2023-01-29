/* 
ARRAY
1. What is the purpose?
2. How to declare an array in JS
3. Number of elements in an Array
4. What is index?
5. Find the value of an element by index
6. Change an element by index
7. get the index of an element by the value
8. what does it mean when you get undefined while getting the value of an element by index
9. How can you add an element to an array at the last position
10. How can you remove the last element from array
11.Add an element at the first position of an arrray 
12. Remove the first element of an array

*/ 
// ________________________________________
/* 
1. when we can store multiple value in one variable then we can use Array. 
     we can declare an array using second braked [] .
2. we can use length property to find  how many number of element store in an array .
    example: var array =[1,2,3,4,5,6];
                console.log(array.length)

3 when we find a specific value in an array . we used index [].
    most of the programming language index position start with 0;
    for change a value with index : [indexNumber] = 'value'

4 when we find a value. but the value is doesn't exist in array. then we get output  is -1
 
5 using indexOf() property to get the index by the value

6 to add a property to array last position using push
7. to remove a property from an array last position using pop
8 to add a property to array first position using unshift
9. to remove a property to array last position using shift
*/




var array =[1,2,3,4,5,6];
console.log(array[10]);
// undefined