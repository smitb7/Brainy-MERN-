import './App.css';
import Profilecard from './Profilecard';


function App() {
  return (
    <>
      <Profilecard name={"M16"} images={"https://c8.alamy.com/comp/DEB61M/the-black-rifle-145-ar-15-assault-carbine-m4a1-with-holographic-sight-DEB61M.jpg"} descriptions={"Be carefull With it...!"}/>
      <Profilecard name={"STNGR HWK M-LOK"} images={"https://images.unsplash.com/photo-1585589197566-b482772f8831?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGd1bnN8ZW58MHx8MHx8fDA%3D"} descriptions={"Be carefull With it...!"}/>
      <Profilecard name={"ASG"} images={"https://www.strele.lt/image/cache/catalog/PREKES%202022/Sautuvai/snaiperinis-airsoft-sautuvas-well-warrior-I-asg-910x1155.jpg"} descriptions={"Be carefull With it...!"}/>
      <Profilecard name={"Tavor SAR"} images={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGyQjTsi40wrFD1c85PzygYefpbwa2mDQdnA&s"} descriptions={"Be carefull With it...!"}/>


      {/* that's how you will re-use the components by changing the values (Dynamicaly) */}
      </>
  );
}

export default App;
