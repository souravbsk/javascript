// Practice Problem: Access Object values
const student = {
    name: 'Fredie',
    age: 26,
}
console.log(student.age)


let data = {
    location: [
        {
            latitude: '34.5 , 37.8',
            longitude: '98.77 , 58.7',
            city: 'Hyderabad',
            country: 'India'
        }
    ]
}

const value = 'city';
console.log(data.location[0][value])
// Hyderabad


