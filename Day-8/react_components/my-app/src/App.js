import logo from "./logo.svg";
import "./App.css";
import Button from "./button";
import Goal from "./Goal";
import Garage from "./Garage";
import Cars from "./cars"; 




function App() {

  const shoot = ()=>{
    alert("Great Shot..!!")
  }

  const shoot1 = (a,b)=>{

    console.log(b.target);
    


    alert(a) ;
  } 
  
  const myArray = ["Smit", "Bhavsar ", "777"];

  return (

    <>
      <h1>Hellowww from react...!</h1>
      <Button btn={"passing array"} array={myArray} />
      <br />
      <Button btn={"Download"} backgroundColor={"blue"}/>
      <br />
      <Button btn={"Upload"}  backgroundColor={"Green"}/>
      <br />
      <Button btn={"Click Me" } backgroundColor={"red"} />

     <br />
     <br />

    {/* shoot */}
     <button onClick={shoot}>
        Shoot
     </button>

    <br /> <br />


    {/* shoot 1 */}
    <button onClick={(event)=>shoot1("Goal...!", event)}>
        Button1
    </button>



    <Goal isGoal={true} />

    {/* Cynamic routs lecture  */}

      <Garage />

      {/* <Cars /> */}
    </>
  );
}

export default App;
