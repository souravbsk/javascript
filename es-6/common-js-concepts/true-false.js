
/* 
Truthy:
1. true
2. any number (positive, negative) will be truthy other than 0;
3. any string other then 
4. '0','false'
5. {}
6. []
Falsy:
1. false
2. 0
3.'' (empty string)
4. undefined
5. null
*/
const x = [];
if(x){
    console.log('value of x is truthy')
}
else{
    console.log('value of x is falsy ')
}


// optional
//  check falsy
const y =null;
if(!y){
    console.log('value is falsy')
}
// value is falsy

//  check true
const z = ' ';
if(!!z){
    console.log('value is true')
}
// value is true 