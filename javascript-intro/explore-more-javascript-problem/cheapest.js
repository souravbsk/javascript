const phones = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'Walton', camera: 10, storage: '32gb', price: 30000, color: 'silver' },
    { name: 'Vivo', camera: 12, storage: '32gb', price: 20000, color: 'silver' },
    { name: 'iphone', camera: 13, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'Xaomi', camera: 15, storage: '32gb', price: 12000, color: 'silver' },
    { name: 'Nokia', camera: 18, storage: '32gb', price: 18000, color: 'silver' },
    { name: 'HTC', camera: 20, storage: '32gb', price: 21000, color: 'silver' },
]
function cheapestPhone(shopCart) {
    let chepest = shopCart[0];
    for (let i = 0; i < shopCart.length; i++) {
        const phone = shopCart[i];
        if (phone.price < chepest.price) {
            chepest = phone;
        }
    }
    return chepest;

}
const cheapPhone = cheapestPhone(phones);
console.log(cheapPhone);

/* 
{
  name: 'Xaomi',  
  camera: 15,     
  storage: '32gb',
  price: 12000,   
  color: 'silver' 
}
*/


// height camera phone 
function highestCamera(phones) {
    let highCamera = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.camera > highCamera.camera) {
            highCamera = phone;
        }
    }
    return(highCamera);
}
const highCameraPhone = highestCamera(phones)
console.log(highCameraPhone);

/* 
{
  name: 'HTC',
  camera: 20,
  storage: '32gb',
  price: 21000,
  color: 'silver'
}
*/