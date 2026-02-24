import './App.css';
import Users from './components/Users';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path="/user/:userId" element={<Users/>}>
              
              </Route>
          </Routes>
      </Router>

      
    </>
  );
}


export default App;
