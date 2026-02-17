const fruits = new map([
    ["apple", 900],
    ["oranges", 400],
    ["apple", 200]
])


let num = fruits.get("apple");

document.getElementById("map1").innerHTML = "The Price Of apple are " + num ;


// creating empty arr

const colors = new map();

//  set map values
colors.set("red", 10)
colors.set("green", 50)
colors.set("blue", 80)

let qty = colors.get("green")
document.getElementById("map2").innerHTML = "There are " + qty + "Green Colors"