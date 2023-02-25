try {
    console.log(66666)
} catch (error) {
    console.log(error)
}
finally{
    console.log('finally done')
}

/* 
66666
finally done
*/

try {
    console.log(name);
    let name = 'neymar';
} catch (error) {
    console.log('inside the catch')
    console.log(error)
}
finally{
    console.log('okay done')
}


/* 
inside the catch
ReferenceError: Cannot access 'name' before initialization
okay done
*/