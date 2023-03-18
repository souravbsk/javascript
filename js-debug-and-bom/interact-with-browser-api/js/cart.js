const addCart = () => {
    const productField= document.getElementById('product-field');
    const quantityField = document.getElementById('quantity-field');
    const productValue = productField.value;
    const quantityValue = quantityField.value;
    productField.value = '';
    quantityField.value = '';

    displayCart(productValue,quantityValue)
    saveLocalStorageValue(productValue,quantityValue)
}


const displayCart = (productValue,quantityValue) =>{
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${productValue} = ${quantityValue}`
    productContainer.appendChild(li)
}


const getLocalStorageValue = () => {
    let cart = {};
    const storeCart = localStorage.getItem('cart');
    if(storeCart){
        cart = JSON.parse(storeCart);
    }
    return cart;
}

const saveLocalStorageValue = (product,quantity) => {
    const cartShop = getLocalStorageValue();
    cartShop[product] = quantity;
    const convertString = JSON.stringify(cartShop);
    localStorage.setItem('cart',convertString);
}

const showStoreData = () => {
    const cartItem = localStorage.getItem('cart');
    const cartParse = JSON.parse(cartItem);
    for(const product in cartParse){
        const quantity = cartParse[product]
        displayCart(product,quantity)
    };
}

showStoreData()