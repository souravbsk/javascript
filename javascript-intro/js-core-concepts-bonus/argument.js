// argument 


function number (num1,num2){
    console.log(num1,num2)
    // 21,5

    console.log(arguments)
    // [Arguments] { '0': 21, '1': 5, '2': 4, '3': 6, '4': 9, '5': 4, '6': 5 }
    console.log(arguments[0])
    // 21
    console.log(arguments[1])
    // 5
    console.log(arguments[2])
    // 4
}
number(21,5,4,6,9,4,5)