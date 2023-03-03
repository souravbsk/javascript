// by default this value global
console.log(this)
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//first object
const player1 = {
    name: 'neymar',
    age:29,
    salary:5000,
    friend:['antony','vini','alison','neymar'],
    game:function(){
        console.log(this)
    },
    game2:function(){
        function hello (){
            console.log(this)
        }
        hello()
    },
    arrowFunction:() => {
        console.log(this)
    },
    wrapArrowFunction :() => {
        const nestedArrowFunction = () => {
            console.log(this)
        }
        nestedArrowFunction()
    }
}
// use this inside regular function____________________________________
/* 
যেহেতু regular function এর নিজের একটি this রয়েছে। তাই কোনো অব্জেক্ট এর ভিতর যদি regular function লিখে 
তার ভিতর this method ব্যবহার করলে । শুধু সেই অব্জেক্ট ভিতর এর ভ্যালু গুলোকে ব্যবহারের সুযোগ দেয়।  
*/
player1.game()
// {name: 'neymar', age: 29, salary: 5000, friend: Array(4), game: ƒ}




// warp the regular with another function__________________________
/* 
তবে regular function এর নিজের একটি this থাকা সত্তেও যদি অন্য কোনো ফাংশন দিয়ে সেই regular ফাংশন কে warp করা হয়।
তবে this এর মান global হিসেবে নির্ধারিত হয়। 
*/
player1.game2()
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}



// use this inside arrow function____________________________________
/* 
যেহেতু arrow function এর নিজের কোনো this method নেই তাই by default ভাবে this এর মান global value দিবে।
*/
player1.arrowFunction()
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}


// wrap arrow function use this inside arrow function____________________________________
/* 
arrow function এর ভিতর this use করার পর । সেই arrow ফাংশনকে যেকোনো wrap করলেও এর মান গ্লোভাল ভ্যালু দিবে। 
*/
player1.wrapArrowFunction()
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}



// regular function use with html event 
// তবে regular function যদি html এর মধ্যে কোনো event এর জন্য লেখা হয় তবে this এর এর মান global value হবে  
function clickOne(){
    console.log(this)
}
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}



// regular function এর নিজের this থাকায়। addEventListener দিয়ে টার্গেট করলে যেই ইলিমেন্ট এর উপর এপ্লাই হবে তাকে টার্গেট করে
document.getElementById('wrapclick').addEventListener('click',function(){
    console.log(this);

})
{/* <button id="wrapclick">wrap click</button> */}


// /wrap regular function with any function 
/* document.getElementById('wrapclick').addEventListener('click',function(){
    function hello () {
        console.log(this);
    }
    hello()
}) */
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}



// অর্থাৎ arrow function use করলেই this এর মান global হবে

// setTimeout(() => {
//     console.log(this);
// }, 1000);
// setInterval(() => {
//     console.log(this);
// }, 1000);