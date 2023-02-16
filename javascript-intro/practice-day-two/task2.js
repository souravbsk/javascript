// ধরো  তুমি  হটাৎ  একদিন  দোকান এ গিয়ে  চাল,ডাল ,তেল   কিনলা  এখন  এমন  একটা  ফাঙ্কশন  লিখতে  হবে  যাকে এই  তিনটা জিনিসের  ক্রয়  মূল্য  বলে  দিলেই  টোটাল  কত  টাকা কিনছো এইটা  বলে  দিবে ।
function itemPrices(item1,item2, item3){
    const totalAmount = item1 + item2 + item3;
    return totalAmount;
}
const rice= 200;
const dal = 300;
const oil = 100;
const totalPrice = itemPrices(rice,dal,oil);
console.log(totalPrice);