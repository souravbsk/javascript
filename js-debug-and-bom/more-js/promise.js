const res = new Promise((resolve, reject) => {
    const num = Math.random() * 10;
    if (num < 5) {
        resolve(num)
    }
    else {
        reject("sorry can't found")
    }
})


res.then((data) => {
    console.log(data + 1);
})
    .catch((err) => console.log(err))