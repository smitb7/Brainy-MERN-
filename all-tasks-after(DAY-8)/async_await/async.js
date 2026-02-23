console.log("Start");

setTimeout(() => {
  console.log("Hellow... 3ml sec Progress");
}, 3000);

console.log("End");


// setTimeout - it's a Non-Blocking Behave of the JS 
// why the setTime out is appears in last because we are using async JS function setTimeout ,
//  and it's 3000ml second delayed so convert 3000ml in to the sec = 3sec 


//default JS behave is sync (it's executes 1/1)
