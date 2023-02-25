const user = {
    name: 'thomas edison',
    address : {
        street: "35/A kochukhet lane",
        plstOffince : 'cotoment prtOfcial',
        cits: 'Dhaka'
    }
}

console.log(user.address.city)
// undefined
console.log(user.address?.city?.street)

// undefined
