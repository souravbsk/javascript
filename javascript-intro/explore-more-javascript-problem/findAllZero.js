function countZeros(binary_num){
    let countArray = [];
for(let i =0; i<binary_num.length;i++){
    const num = binary_num[i];
    if(num === '0'){
        countArray.push(num)
    }
}
return countArray.length
}

// const number= '10101';
// countZeros(number)



let num = 200010510450009;
let cnt = 0;
while (num > 0) {
    console.log(num)
 if(num%10===0){
    cnt++;
 }
 num/=10;
 num = Math.floor(num);
}
console.log(cnt);

