const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 2000);
});

myPromise.then((message) => {
    console.log(message); // Output: Promise resolved! (after 2 seconds)
}).catch((error) => {
    console.error(error);
});
