// 1
// তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 
function celToFahren(cel) {
    const fahrenConvert = cel * 9 / 5 + 32;
    return fahrenConvert;
}
const fahrenheit = celToFahren(3)
console.log(fahrenheit + '°F');

// 2
// একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে।

function fahrenToCel(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}
const celsius = fahrenToCel(2);
console.log(celsius + '°C');


// 3
// কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে।

function findGrade(marks) {
    let grade = '';
    if (marks > 100) {
        grade = 'congratulation 100 ar opor marks pai6en. apni bulding student'
    }
    else if (marks <= 100 && marks >= 1) {
        if (marks < 80) {
            if (marks < 70) {
                if (marks < 60) {
                    if (marks < 50) {
                        if (marks < 40) {
                            if (marks < 33) {
                                grade = 'F'
                            }
                            else {
                                grade = 'D'
                            }
                        }
                        else {
                            grade = 'C'
                        }
                    }

                    else {
                        grade = 'B'
                    }
                }
                else {
                    grade = 'A-'
                }
            }
            else {
                grade = 'A'
            }
        }
        else {
            grade = 'A+'
        }
    }
    else {
        grade = '1 ar kom pan kamne'
    }
    return grade;
}

const result = findGrade(32);
console.log(result);



// 4
// সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। 


function totalInterest(amount, year, interest) {
    const calculate = amount * interest / 100 * year;
    return calculate;
}

const amount = 40000;
const year = 10;
const int = 3;
const Interest = totalInterest(amount, year, int);
console.log(Interest);



function temperatureConverter(valNum) {
    const converter = (valNum - 32) / 1.8;
    if (!Number.isInteger(converter)) {
        const fixedNumber = converter.toFixed(2);
        return parseFloat(fixedNumber);
    }
    return converter;

}
const result3 = temperatureConverter(103);
console.log(typeof result3);



function average(arrOfMarks) {
    //write your code here
    let totalSub = 0;
    for (let i = 0; i < arrOfMarks.length; i++) {
        const subjectElement = arrOfMarks[i];
        totalSub += subjectElement;
    }
    const totalAverage = totalSub / arrOfMarks.length;
    if (!Number.isInteger(totalAverage)) {
        return parseFloat(totalAverage.toFixed(2))
    }
    return totalAverage

    // don't forget to write return
}


const subjects = [75.25, 65, 80, 35.45, 99.50];
const averageMarks = average(subjects)
console.log(typeof averageMarks);




function getLetter(s) {
    const S = s[0].toLowerCase();
    const A = ['a', 'e', 'i', 'o', 'u'];
    const B = ['b', 'c', 'd', 'f', 'g'];
    const C = ['h', 'j', 'k', 'l', 'm'];
    const D = ['n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

    let letter;

    for (let i = 0; i < A.length; i++) {
        const AElements = A[i];
        if (AElements == S) {
            letter = 'A';
        }
    }
    for (let i = 0; i < B.length; i++) {
        const BElements = B[i];
        if (BElements == S) {
            letter = 'B';
        }
    }
    for (let i = 0; i < C.length; i++) {
        const CElements = C[i];
        if (CElements == S) {
            letter = 'C';
        }
    }
    for (let i = 0; i < D.length; i++) {
        const DElements = D[i];
        if (DElements == S) {
            letter = 'D';
        }
    }
    // Write your code here

    return letter;
}
const result4 = getLetter('qbdfsdf');
console.log(result4);





const deleteProperty = (arr) => {
    // Write your code here.
    const arrProp = arr[0];
    const prop = arr[1];
    if (prop in arrProp) {
        delete arrProp.prop;
        return 'YES'
    }
    return "NO"


}

const arr1 = [{
    fname: 'John',
},
    'fname'
];
const deletePropertyResult = deleteProperty(arr1);
console.log(deletePropertyResult);