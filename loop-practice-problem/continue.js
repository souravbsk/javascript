var numbers = [25,45,85,65,75,95,35,24,85];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        continue
    }
    console.log(number);
}

// 25
// 45
// 35
// 24


var items = ['apple','banana','orange','tomato']
for(var i = 0; i < items.length; i++){
    var item = items[i]
    if(item == 'orange'){
        continue;
    }
    console.log(item);
}
/* 
apple
banana
tomato
 */