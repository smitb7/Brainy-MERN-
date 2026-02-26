let cart = {
  items: [
    { itemId: 1, itemName: "Chair", price: 10000, quantity: 1 },
    { itemId: 2, itemName: "A/C", price: 50000, quantity: 1 },
    { itemId: 11, itemName: "Washing Machine", price: 25000, quantity: 1 },
    { itemId: 12, itemName: "A/C", price: 50000, quantity: 1 },
    { itemId: 3, itemName: "Refrigerator", price: 35000, quantity: 2 },
    { itemId: 4, itemName: "Microwave", price: 8000, quantity: 1 },
    { itemId: 5, itemName: "Television", price: 40000, quantity: 1 },
    { itemId: 6, itemName: "Blender", price: 2500, quantity: 3 },
    { itemId: 7, itemName: "Dishwasher", price: 22000, quantity: 1 },
    { itemId: 8, itemName: "Laptop", price: 60000, quantity: 2 },
    { itemId: 9, itemName: "Smartphone", price: 30000, quantity: 3 },
    { itemId: 10, itemName: "Air Purifier", price: 15000, quantity: 1 },
  ],

  totalPrice: 0,
  discount: 0,
};

// *** add item ***

function addItem(itemId, itemName, price, quantity) {
  const yourNewitem = { itemId, itemName, price, quantity };
  // add the item

  cart.items.push(yourNewitem);
}

// log part---------------------------------

// console.log("before adding ", cart.items);

addItem(13,"this is the new item added", 50000, 1);

// console.log("after adding", cart.items);

// *** removing items ***

function removeItem(itemId) {
  const targetIndex = cart.items.findIndex((item) => item.itemId === itemId);

  cart.items.slice(targetIndex, 1);

  // if the item is not exist

  if (targetIndex !== -1) {
    cart.items.splice(targetIndex, 1);
  }
}

// function calling and console
removeItem(7)    // now you can see the 2nd object is deleted from the cart , in that case A/C will remove
// console.log(cart.items);

// console.log(cart.items);


// *** calculate the total price ***

function calculateTotalprice(){

    let pricesum = 0;
    // let discount =0;
    // so now we will calculate the total price of the items which is store in to the cart 
    for(let i=0; i<cart.items.length; i++){

        pricesum += cart.items[i].price * cart.items[i].quantity;

        cart.totalPrice = pricesum;



    }

    return cart.totalPrice;

}


calculateTotalprice()



// discount 
function itemDiscount(counteddescount) {
  cart.discount = counteddescount; 
  cart.totalPrice = cart.totalPrice - (cart.totalPrice * counteddescount / 100)

  
}
itemDiscount(10)



//  now we will see all these functionalities
function displayItems() {

  console.log("this is your final items", cart.items);
  console.log("this is your final price", cart.totalPrice);
  console.log("this is your final discount", cart.discount);
  
  
  
  
}

// console.log(displayItems());

displayItems()
