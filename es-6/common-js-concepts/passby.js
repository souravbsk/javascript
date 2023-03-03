// 1/primitive types are pass by value
const first = 2;
const second = 3;
function multiply(a,b){
    a = 7;
    const total = a * b;
    console.log(total);
}
console.log(first,second)
// 2 3
multiply(first,second)
console.log(first,second)
// 2 3




//object and array are pss by reference 
const actor1 = {nayok:'srk',nayika:'kajol'};
const actor2 = {nayok:'hritik',nayika:'puja'};

function movie(copule1,copule2){
    copule1.nayok = 'varun'
    copule2.nayika = 'alia'
    // console.log(copule1,copule2);
    // { nayok: 'srk', nayika: 'kajol' } { nayok: 'hritik', nayika: 'alia' }
}
console.log(actor1,actor2);
// { nayok: 'srk', nayika: 'kajol' } { nayok: 'hritik', nayika: 'puja' }
movie(actor1,actor2)
console.log(actor1,actor2);
//{ nayok: 'varun', nayika: 'kajol' } { nayok: 'hritik', nayika: 'alia' }
