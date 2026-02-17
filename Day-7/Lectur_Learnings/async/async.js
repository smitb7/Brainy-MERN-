
console.log("Hello One");

setTimeout(
    function (params) {
        console.log("Hello Two");
        
    }, 6000
)
console.log("Hello Three..!");


// setTimeout

const myPromise = new Promise(function (resolve, reject) {

    setTimeout(function () {
        resolve("Successfull...!")
    }, 5000)
    
});
myPromise.then(function (val) {
    console.log(val);
    
})


