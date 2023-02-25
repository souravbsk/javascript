console.log(99**9999)

// RangeError 
// একটি নির্দিষ্ট রেঞ্জ এর উপর চলে গেলে তখন আমাদের RangeError দিয়ে থাকে 


// ____________________________________________________
// ReferenceError
//যদি কোনো একটি ভ্যারিয়েবল নিয়ে কাজ করি। যেটা exist এই করে না তখন ReferenceError দেয়া হয়।  
// console.log(varName)
// ReferenceError: varName is not defined



// ____________________________________________________
// SyntaxError
//জাভাস্ক্রিপ্ট কোড লেখার সময় যদি কোডের SyntaxError ভুল থাকে তবে এই error টি দিয়ে থাকে।
// for (let i = 0; i < 20 i++) {
    
// }
// SyntaxError: Unexpected identifier 'i'





// TypeError
//কোনো একটি অবজেক্ট এর দুই স্টেপ ভিতর যদি সেই ভ্যালু না পায় তবে। এই error pass করে। 
// const car = {}
// console.log(car.name)
// undefined
// console.log(car.name.price)
// TypeError: Cannot read properties of undefined (reading 'price')



// EvalError
// এটা সাধারনত যদি আমরা একটি কোড ইডিটর বানাই তখন দেয় 
