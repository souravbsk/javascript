const bottle = {
    color:'yellow',
    price:50,
    isCleaned: true,
    capacity:1
};

// loping object with for of
const values = Object.keys(bottle)

for(const key of values){
    console.log(key, bottle[key])
} 

/* 
color yellow
price 50
isCleaned true
capacity 1
*/



// loping object with for in
for(const key in bottle){
    const value = bottle[key];
    console.log(key, value)
}

/* 
color yellow
price 50
isCleaned true
capacity 1
*/


// advance way loping object with Object.entries()
// destructuring way 
for(const [key,value] of Object.entries(bottle)){
    console.log(key,value)
}

/* 
color yellow
price 50
isCleaned true
capacity 1
*/