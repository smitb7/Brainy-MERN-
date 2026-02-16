
const person1={
    fName: "ABC",
    lName: "Xyz",
    id: 1234,
    fullname: function () {
            return (this.fName + this.lName)
    }
}



// display with loop 


// console.log(person1.fullname());

for (let i in person1){
    console.log(i, person1[i]);
    
}


// bject.values (obj convert in arr )

const arr = Object.values(person1)
