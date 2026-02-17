const fruits = ["Apple", "strawberry","mango" ]

let text = "<ol>";
for(let i=0; i< fruits.length; i++){
    text += "<li>" + fruits[i] + "</li>";
}

text += "/ol";


// document.getElementById('fruits').innerHTML = text;




// array methods
// Push, pop, shift, unshift, join , concat

// searching , shorting , ittrating 

// searching 
let position = fruits.indexOf("mango") + 1 ;
// why +1 ? because for public the counting are starting from 1 and for developers it's starting from 0 so...

console.log(position);


// short 
fruits.sort();
console.log(fruits);

fruits.reverse();
console.log(fruits);



 

 
