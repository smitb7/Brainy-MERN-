let UserInput_password = "admin12";   // input
let actualpassword = "admin123"       // actual passwored which is stored in database 

if (UserInput_password == actualpassword) {
  console.log("login successfull...!");
} else {
  console.log(
    "If you are actual user than try to remember, If not... Get lost...!"
  );
}
