document.getElementById('addedBtn').addEventListener('click',() => {
    const product = document.getElementById('product')
    const quantity = document.getElementById('quantity')
    const productValue = product.value;
    const quantityValue = quantity.value;
    if(productValue && quantityValue){

        localStorage.setItem(productValue,quantityValue);
    }
    product.value ='';
    quantity.value = '';
})