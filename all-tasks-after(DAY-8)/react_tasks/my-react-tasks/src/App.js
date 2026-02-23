import './App.css';
import Profilecard from './Profilecard';
import Products from './Products';


function App() {
  return (
    <>
      {/* reusability */}
      <Profilecard name={"M16"} images={"https://c8.alamy.com/comp/DEB61M/the-black-rifle-145-ar-15-assault-carbine-m4a1-with-holographic-sight-DEB61M.jpg"} descriptions={"Be carefull With it...!"}/>
      <Profilecard name={"STNGR HWK M-LOK"} images={"https://images.unsplash.com/photo-1585589197566-b482772f8831?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGd1bnN8ZW58MHx8MHx8fDA%3D"} descriptions={"Be carefull With it...!"}/>
      <Profilecard name={"ASG"} images={"https://www.strele.lt/image/cache/catalog/PREKES%202022/Sautuvai/snaiperinis-airsoft-sautuvas-well-warrior-I-asg-910x1155.jpg"} descriptions={"Be carefull With it...!"}/>
      <Profilecard name={"Tavor SAR"} images={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGyQjTsi40wrFD1c85PzygYefpbwa2mDQdnA&s"} descriptions={"Be carefull With it...!"}/>

      {/* products */}

      <Products  productimg= {"https://m.media-amazon.com/images/I/71+icYuxrEL.jpg"} productname={"Safari-Bag"} price={"₹.679"} description={"Black, 30 Litre"} isAvailable={true}/>
      <Products  productimg= {"https://m.media-amazon.com/images/I/41uSdnQa7nL._SX522_.jpg"} productname={"APFEN® Type C to Lightning"} price={"₹.279"} description={"iPhone 14/14 Pro/ 14 Pro Max/ 13/13 Pro for all Series"} isAvailable={true}/>
      <Products  productimg= {"https://m.media-amazon.com/images/I/716dEyuc93L._SX679_.jpg"} productname={"CELLBELL Desire C104 Office Chair"} price={"₹.4000"} description={"Adjustable Seat Height, Sturdy Metal Base"} isAvailable={false}/>
      {/* that's how you will re-use the components by changing the values (Dynamicaly) */}

      </>
  );
}

export default App;
