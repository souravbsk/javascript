const names = ['uchass', 'neymar', 'farhan', 'akash', 'ronaldo', 'ananta', 'farhan', 'kosai', 'akash', 'ananta', 'neymar', 'ronaldo'];

function duplicateName(names) {
    let unique = [];
    let dupli = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name)
        }
        else{
            dupli.push(name)
        }
    }

    return(unique);
    console.log(dupli);


}

const result = duplicateName(names);
console.log(result);