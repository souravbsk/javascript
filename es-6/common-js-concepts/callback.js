function greatings (callFunction,name) {
    // pass a function as a parameter 
    callFunction(name)
}

const greatingHandler = (name) => {
    console.log('Good Evening' , name)
};


const greatingMorging = (name) => {
    console.log('Good Morning' , name)

}

const greatingNight = (name) => {
    console.log('Good Night' , name)

}

greatings(greatingHandler,'sourav')
// Good Evening sourav
greatings(greatingMorging,'tom holand')
// Good Morning tom holand

greatings(greatingNight,'androw')
// Good Night androw