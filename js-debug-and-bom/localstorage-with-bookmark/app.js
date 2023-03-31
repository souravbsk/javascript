let products = [];
const fetchDataLoad = async () => {
    const res = await fetch('./product.json');
    const data = await res.json();
    showDisplayData(data);
}
fetchDataLoad()

const showDisplayData = (data) => {
    products = data;
    const productContainer = document.getElementById("prodcut-container");
    productContainer.textContent = "";
    data.forEach(element => {
        const { category, description, image, inventory, name, price, id } = element;
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `
        <div class="product">
                    <img src="${image}" alt="">
                    <div class="product-content">
                        <h3>name:${name}</h3>
                        <p>description: ${description.length > 20 ? description.slice(0, 20) + "..." : description}</p>
                        <p>Category: ${category}</p>
                        <p>Price: ${price}</p>
                        <div class="cart-shop">
                        <button>Buy Now</button>
                        <p>
                        
                        ${isStore(id) ? `<button onclick="removeToBookMark(${id})" > <i class="fa-solid fa-bookmark"></i> </button>` : `<button onclick="saveToBookMark(${id})"> <i class="fa-regular fa-bookmark"></i> </button>`} 
                        
                        
                         
                                    </p>
                                    </div>
                    </div>
                </div>
                `
        productContainer.appendChild(productDiv)
    });

}



const isStore = (id) => {
    console.log(id);
    const localStorageBookMark = localStorage.getItem('bookmarkProduct');
    const bookmark = JSON.parse(localStorageBookMark);
    const isBookMark = bookmark?.find(pd => pd.id == id);
    if (isBookMark) {
        return true
    }
    else {
        return false
    }
}



const saveToBookMark = (id) => {
    let storageProduct = [];
    const searchProduct = products.find(product => product.id === id);
    const { price, name } = searchProduct;
    const productStore = { id, price, name, bookmark: true }
    const localStorageBookMark = localStorage.getItem('bookmarkProduct');
    const bookmark = JSON.parse(localStorageBookMark);

    if (bookmark) {
        const isProdocutMarked = bookmark.find(pd => pd.id == id);
        if (isProdocutMarked) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
        else {
            storageProduct.push(...bookmark, productStore)
            console.log(storageProduct);
            localStorage.setItem("bookmarkProduct", JSON.stringify(storageProduct));

        }
    }
    else {
        console.log('object');
        storageProduct.push(productStore)
        localStorage.setItem("bookmarkProduct", JSON.stringify(storageProduct))
    }

    fetchDataLoad()

}

const removeToBookMark = (id) => {
    const localStorageBookMark = localStorage.getItem('bookmarkProduct');
    const bookmark = JSON.parse(localStorageBookMark);
    const restProduct = bookmark.filter(pd => pd.id !== id);
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Successfully remove the item',
        showConfirmButton: false,
        timer: 1500
    })
    localStorage.setItem("bookmarkProduct", JSON.stringify(restProduct))
    fetchDataLoad()
}