// task 1
// find triangle area 

function triangleToAram(side1,side2,side3){
    const totalLenght = (side1 + side2 + side3) / 2;
    const area = Math.sqrt(totalLenght*((totalLenght-side1)*(totalLenght-side2)*(totalLenght-side3)));
    console.log(area); 
}


triangleToAram(5,6,7)