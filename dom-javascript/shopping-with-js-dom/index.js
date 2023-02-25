let count = 0;

//first product
document.getElementById('first-btn').addEventListener('click', function () {

    const cartTitle = document.getElementById('first-title').innerText;
    const cartPrice = document.getElementById('first-price').innerText;
    const cartQuantity = document.getElementById('first-quantity').innerText;

    const totalPrice = parseInt(cartPrice) * parseInt(cartQuantity);

    displayContent(cartTitle, cartPrice, cartQuantity, totalPrice)

})

//second product
document.getElementById('second-btn').addEventListener('click', function (e) {
    const cartTitle = e.target.parentNode.parentNode.children[0].innerText;
    const cartPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const cartQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
    const totalPrice = parseInt(cartPrice) + parseInt(cartQuantity);
    displayContent(cartTitle, cartPrice, cartQuantity, totalPrice)
})

//third product 
document.getElementById('third-btn').addEventListener('click', function (e) {
    const cartTitle = e.target.parentNode.parentNode.children[0].innerText;
    const cartPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const cartQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
    const totalPrice = parseInt(cartPrice) * parseInt(cartQuantity);
    displayContent(cartTitle, cartPrice, cartQuantity, totalPrice)
})
// forth-btn 
document.getElementById('forth-btn').addEventListener('click', function (e) {
    const cartTitle = e.target.parentNode.parentNode.children[0].innerText;
    const cartPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const cartQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
    const totalPrice = parseInt(cartPrice) * parseInt(cartQuantity);
    displayContent(cartTitle, cartPrice, cartQuantity, totalPrice)
})
// fifth-btn 
document.getElementById('fifth-btn').addEventListener('click', function (e) {
    const cartTitle = e.target.parentNode.parentNode.children[0].innerText;
    const cartPrice = e.target.parentNode.parentNode.children[2].children[0].value;
    const cartQuantity = e.target.parentNode.parentNode.children[3].children[0].value;
    const totalPrice = parseInt(cartPrice) * parseInt(cartQuantity);
    displayContent(cartTitle, cartPrice, cartQuantity, totalPrice)
})
let finalPrice = 0;
function displayContent(cartTitle, cartPrice, cartQuantity, totalPrice) {
    const totalProduct = document.getElementById('total-product');
    const tableFooter = document.getElementById('table-footer');
    // console.log(totalProduct)
    finalPrice = finalPrice + totalPrice;
    count += 1
    totalProduct.innerText = count;

    const tableContainer = document.getElementById('table-container');

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th>${count}</th>
    <td>${cartTitle}</td>
    <td>${cartPrice}</td>
    <td>${cartQuantity}</td>
    <td>${totalPrice}</td>
    <button class="btn btn-error remove-btn">X</button>
    `
    tableContainer.appendChild(tr)


   
    tableFooter.innerText = finalPrice;

    const removeBtns = document.getElementsByClassName('remove-btn');

    for (const removeBtn of removeBtns) {
        removeBtn.addEventListener('click', function (e) {
            console.log(e.target.parentNode.removeChild())
        })
    }
}

