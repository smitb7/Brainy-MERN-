const electricItems = new Map(

    [
        ["iphone", 90000],
        ["MacBook(AIR)", 150000],
        ["airBuds", 74000],
        ["Charger", 16000],
        ["Headphone", 87000]
    ]

)

//  To add the new values in to the map arr
// so the with the use of set you can add the values in to the map

electricItems.set("Cable", 4000)
electricItems.set("Headset", 8000)

electricItems.delete("Cable")
// now this item is deleted you can see at line no.21
const map = electricItems.get("Cable")           // You can change the diffrent values which are stored in to the map array



for (const i of electricItems) {
    console.log(i);
    
}


console.log(map);
