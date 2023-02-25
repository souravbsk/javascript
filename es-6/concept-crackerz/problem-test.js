const checkEvenLength = (arrOfFriends) => {
    //write your code here
    const evenArray = arrOfFriends.filter(friend => friend.length % 2 === 0)
    return evenArray;
}
checkEvenLength(['John', 'James', 'Jane', 'Ratul'])




const calculate = (arrOfNumbers) => {
    //write your code here
    let sumNumber = 0;
    arrOfNumbers.map(number => {
        const squreNumber = number * number;
        sumNumber+=squreNumber

    })
    return sumNumber/arrOfNumbers.length;


}
calculate([4,6,10,12])



const findNames = (arrOfObj) => {
    //write your code here
   //don't forget to return
   const arraOfName = arrOfObj.map(user => user.name)
   console.log(arraOfName)

   }

   findNames( [
    { name: 'John', age: 20 },
    { name: 'Mary', age: 25 },
    { name: 'Peter', age: 30 }
  ])




  const findBooks = (arrOfBooks) => {
    //write your code here
    const newArrayOfBooks = arrOfBooks.filter(books => books.year < 2000);
    return newArrayOfBooks
   //don't forget to return
  }