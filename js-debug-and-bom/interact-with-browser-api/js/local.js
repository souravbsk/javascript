const person = {
    name : "ronaldinho",
    age:'45',
    position:'striker'
}


const setValue = ()=> {
const convertString = JSON.stringify(person);
localStorage.setItem('person',convertString)
}
// {"name":"ronaldinho","age":"45","position":"striker"}

const getValue =() => {
    const StorageValue = localStorage.getItem('person');
    const convertObj = JSON.parse(StorageValue);
    console.log(convertObj);
}
// {name: 'ronaldinho', age: '45', position: 'striker'}