const clearStorage = () => {
    localStorage.clear();
}
const setItemName = () => {
    localStorage.setItem('name','sakib khan')
}
const setItemAge = () => {
    localStorage.setItem('age','40')
}

const getItem = () => {
    const name = localStorage.getItem('name');
    const age = localStorage.getItem('age');
    console.log(name,age);
}

const person = {
    firstName: 'Abraham',
    lastName:'Linkon'
}

const setObjItem = () => {
const convertString = JSON.stringify(person);
localStorage.setItem('person',convertString)
}