import logo from "./logo.svg";
import "./App.css";
import Button from "./button";

function App() {

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
    </>
  );
}

export default App;
