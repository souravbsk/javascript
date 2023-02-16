// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 
function Namota(num) {
    var tableResult = ''
    for (var i = 1; i <= 10; i++) {
        var multiple = (i * num) + ' ';
        tableResult = tableResult + multiple
    }
    return (tableResult);

}
var multiplicationTable = Namota(12);
console.log(multiplicationTable);




// একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

function convertCase(word) {
    var convertWord = word.toLowerCase();
    return (convertWord);


}
var wordConvert = convertCase('HeEllow');
console.log(wordConvert);


// ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 
function fullName(firstName, lastName) {
    var fullName = firstName + ' ' + lastName;
    return fullName;
}
var nameResult = fullName('hablu', 'kanto');
console.log(nameResult);
// hablu kanto



// একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।
function convertSquare(num) {
    var square = num * num;
    return square;
}

var squareResult = convertSquare(2)
console.log(squareResult);

// pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :
var pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
}
console.log(pizza.toppings[2]);