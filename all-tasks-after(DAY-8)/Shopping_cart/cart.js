let cart = {
    items : [
        { itemId: 1, itemName: 'Chair', price: 10000, quantity: 1 } ,
        {itemId: 2, itemName: "A/C", price: 50000, quantity: 1}
    ],

    totalPrice : 0,
    discount : 0

}


// add item 

function addItem(itemId, itemName, price, quantity) {

    const yourNewitem = {itemId, itemName, price, quantity}
     // add the item
   
    cart.items.push(yourNewitem)



}

// log part---------------------------------

// console.log("before adding ", cart.items);

// addItem(5,"goodsleep", 600, 1);

// console.log("after adding", cart.items);



// removing items

function removeItem(itemId) {

    
    const targetIndex = cart.items.findIndex(
        (item)=>{

            return item.itemId === itemId
        }
    )
    
    cart.items.slice(targetIndex, 1)

    // if the item is not exist

    if(targetIndex !== -1){
        cart.items.splice(targetIndex, 1)
    }
    
}

// removeItem(1)

console.log(cart.items);
