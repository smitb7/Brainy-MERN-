

let num = 13;
console.log(typeof num);

let str = "Hellow..!! here You can write text "
console.log( typeof str);

let bool = true
console.log(typeof bool);


const obj = {
    Name : "Smit Bhavsar",
    age : 25,
    mobile : 1233211234,
    address : " Paranthe wali Gali , chandnichowk to chainaa...!, ",
    isavailable : false,
    sayhi : function greet() {
        return "Good Morning from Bhavsar smit...!" 
    }
}

console.log(typeof obj.sayhi());
console.log(obj);





let arr = [1, true, 3, false, "hii", 12]
console.log(typeof arr);





/// function that returns squere value 

function sqval(a) {

    return a**2
    
}

console.log(sqval(9))