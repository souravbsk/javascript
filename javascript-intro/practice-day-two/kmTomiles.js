// এমন  একটা  ফাঙ্কশন  লিখবে  যাকে  তুমি কিলোমিটার  দিলে  সে  তোমাকে এ মাইল এ কনভার্ট  করে  দিবে 

function kmToMiles (km){
    const miles = km / 1.609;
    return miles;
}
const miles = kmToMiles(55);
console.log(miles.toFixed(4));