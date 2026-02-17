
let text1  = "Hello World. Learning JS Language !"
let n = text1.search("Learning")

let regex1 = text1.search(/World/i ) // I is 

document.getElementById("search").innerHTML = n;
document.getElementById("search").innerHTML = regex1


// search method 


let text2 = "Hello World!";
let m = text2.replace("World", "Javascript");

document.getElementById("replace").innerHTML = m;

// syntax of modifiers

// modifiers

// I - ignores case sensitivity
// g - global match 
// m - multipleline match 
// d - 