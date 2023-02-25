const user  =  {
    name: 'neymar', 
    email: 'sb07008@gamil.com', 
    phone: 01254552747,
    isStarPlyer: true,
    isFifaWin: false,
}
const userStrigify = JSON.stringify(user);
console.log(user)
console.log(userStrigify)

/* 
normal javascript object (js)
{
  name: 'neymar',
  email: 'sb07008@gamil.com',
  phone: 179492327,
  isStarPlyer: true,
  isFifaWin: false
}

convert json string (stringify)
{"name":"neymar","email":"sb07008@gamil.com","phone":179492327,"isStarPlyer":true,"isFifaWin":false}
*/



const shop = {
    name: 'bdShop',
    address: {
        street: 'vuter golli er vitor',
        start: 'Dhaka',
        city: 'BD'
    },
    product:['laptop','computer','mobile','tablet','iphone'],
    revenue:300000,
    isSpecial: true 
}

const shopStringify = JSON.stringify(shop);
console.log(shopStringify)
// {"name":"bdShop","address":{"street":"vuter golli er vitor","start":"Dhaka","city":"BD"},"product":["laptop","computer","mobile","tablet","iphone"],"revenue":300000,"isSpecial":true}


// parse _________________________________________________
const shopParse = JSON.parse(shopStringify);
console.log(shopParse)

/* 
{
  name: 'bdShop',
  address: { street: 'vuter golli er vitor', start: 'Dhaka', city: 'BD' },
  product: [ 'laptop', 'computer', 'mobile', 'tablet', 'iphone' ],
  revenue: 300000,
  isSpecial: true
}
*/